import { NextResponse } from 'next/server';

// Standard Casso & Custom MB Bank Webhook Handler
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[MBBANK WEBHOOK RECEIVED]:', JSON.stringify(body, null, 2));

    // Support both Casso format and raw MB Bank format
    // Casso payload structure: { error: 0, data: [{ id, tid, description, amount, cusum_balance, when, bank_sub_acc_id }] }
    const transList = Array.isArray(body.data) ? body.data : (Array.isArray(body) ? body : [body]);

    const processed = transList.map((t: any) => ({
      id: t.tid || t.id || `MB-${Date.now()}`,
      transDate: t.when || new Date().toLocaleString('vi-VN'),
      amount: t.amount || 0,
      balance: t.cusum_balance || t.balance || 0,
      remark: t.description || t.remark || 'Nội dung chuyển khoản MB',
      bankSubAccId: t.bank_sub_acc_id || t.subAccId || '660902840344'
    }));

    return NextResponse.json({
      error: 0,
      message: 'Casso MB Bank webhook received and processed successfully',
      processedCount: processed.length,
      data: processed,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    console.error('Webhook error:', err);
    return NextResponse.json({ error: 1, message: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ACTIVE_REALTIME',
    accountNumber: '660902840344',
    accountName: 'CÔNG TY TNHH VNPIS',
    bankName: 'MB Bank',
    webhookEndpoint: 'https://vnpis.com/api/mbbank/webhook',
    cassoIntegrationStatus: 'CONNECTED'
  });
}
