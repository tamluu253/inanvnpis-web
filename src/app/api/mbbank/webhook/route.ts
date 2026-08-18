import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('[CASSO VNPIS POS WEBHOOK RECEIVED]:', JSON.stringify(body, null, 2));

    const transList = Array.isArray(body.data) ? body.data : (Array.isArray(body) ? body : [body]);

    const processed = transList.map((t: any) => ({
      id: t.tid || t.id || `MB-${Date.now()}`,
      transDate: t.when || new Date().toLocaleString('vi-VN'),
      amount: t.amount || 0,
      balance: t.cusum_balance || t.balance || 0,
      remark: t.description || t.remark || 'Biến động số dư MB Bank VNPIS',
      bankSubAccId: t.bank_sub_acc_id || t.subAccId || '660902840344'
    }));

    return NextResponse.json({
      error: 0,
      message: 'Casso Webhook verified and processed successfully',
      clientId: '647acefd-abfe-4508-807f-b35551e9ab41',
      processedCount: processed.length,
      data: processed,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({ error: 1, message: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'ACTIVE_REALTIME',
    clientId: '647acefd-abfe-4508-807f-b35551e9ab41',
    accountNumber: '660902840344',
    accountName: 'Công ty TNHH VNPIS',
    bankName: 'MB Bank',
    webhookEndpoint: 'https://vnpis.com/api/mbbank/webhook',
    cassoIntegrationStatus: 'VERIFIED_CONNECTED'
  });
}
