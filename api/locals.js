export default async function handler(req, res) {
  const { web } = req.query;

  global.vaultStore = global.vaultStore || {};

  return res.status(200).json({
    value: global.vaultStore[web] || null,
  });
}
