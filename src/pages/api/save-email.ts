import type { NextApiRequest, NextApiResponse } from "next";

interface SaveEmailRequestBody {
  email: string;
}

interface ApiResponse {
  message: string;
}

const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
const JSONBIN_BIN_ID = process.env.JSONBIN_BIN_ID;
const JSONBIN_URL = `https://api.jsonbin.io/v3/b/${JSONBIN_BIN_ID}`;
const EMAIL_REGEX = /\S+@\S+\.\S+/;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ApiResponse>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  if (!JSONBIN_API_KEY || !JSONBIN_BIN_ID) {
    console.error("JSONBin configuration missing.");
    return res.status(500).json({ message: "Server configuration error." });
  }

  const { email } = req.body as SaveEmailRequestBody;

  if (!email || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ message: "Invalid email provided." });
  }

  const dataToSave = {
    last_entered_email: email,
    timestamp: new Date().toISOString(),
  };

  try {
    const response = await fetch(JSONBIN_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-Master-Key": JSONBIN_API_KEY,
        "X-Bin-Versioning": "false",
      },
      body: JSON.stringify(dataToSave),
    });

    if (response.ok) {
      return res.status(200).json({ message: "Email saved successfully." });
    } else {
      const errorData = await response.json();
      console.error("JSONBin API Error:", errorData);
      return res
        .status(response.status)
        .json({ message: "Failed to save email via external service." });
    }
  } catch (error) {
    console.error("API Route Fetch Error:", error);
    return res
      .status(500)
      .json({ message: "Internal server error during data saving." });
  }
}
