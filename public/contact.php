<?php
header("Content-Type: application/json; charset=UTF-8");

// POST以外は拒否
if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  http_response_code(405);
  echo json_encode(["message" => "Method Not Allowed"]);
  exit;
}

// JSON受け取り
$data = json_decode(file_get_contents("php://input"), true);

$name    = trim($data["name"] ?? "");
$email   = trim($data["email"] ?? "");
$subject = trim($data["subject"] ?? "");
$message = trim($data["message"] ?? "");

// 必須チェック
if ($name === "" || $email === "" || $message === "") {
  http_response_code(400);
  echo json_encode(["message" => "必須項目が不足しています"]);
  exit;
}

// ===== 店のメールアドレス =====
$to = "24aw0142@jec.ac.jp"; // ← 店のメールに変更
$mailSubject = "【お問い合わせ】" . ($subject ?: "無題");

$mailBody = <<<EOT
お名前：{$name}
メール：{$email}

--- メッセージ ---
{$message}
EOT;

$headers = "From: {$email}\r\nReply-To: {$email}";

// メール送信
if (mail($to, $mailSubject, $mailBody, $headers)) {
  echo json_encode(["success" => true]);
} else {
  http_response_code(500);
  echo json_encode(["message" => "送信に失敗しました"]);
}
