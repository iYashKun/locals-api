export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed!" });
  }

  const { web, value } = req.body;

  if (!web) {
    return res.status(400).json({ error: "Missing web" });
  }

  global.vaultStore = global.vaultStore || {};
  global.vaultStore[web] = value;

  return res.status(200).json({ success: true });
}
