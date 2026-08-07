import { NextResponse } from 'next/server';

// In-memory / persistent transaction store for real-time MB Bank feed
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Received MB Bank Webhook Notification:', body);

    // Standard Casso/MBBank Webhook payload format:
    // { error: 0, data: [{ id, tid, description, amount, cusum_balance, when, bank_sub_acc_id }] }
    // or standard payload: { accountNumber: "660902840344", amount: 5000000, content: "SBC THANH TOAN", ... }

    const transList = Array.isArray(body.data) ? body.data : [body];

    return NextResponse.json({
      error: 0,
      message: 'MB Bank Webhook received successfully',
      processedCount: transList.length,
      timestamp: new Date().toISOString()
    });
  } catch (err: any) {
    return NextResponse.json({ error: 1, message: err.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    accountNumber: "660902840344",
    bankName: "MB Bank (Ngân hàng TMCP Quân Đội)",
    accountName: "CÔNG TY TNHH VNPIS",
    status: "ACTIVE_REALTIME",
    webhookUrl: "https://vnpis.com/api/mbbank/webhook"
  });
}
