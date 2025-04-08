export default function handler(req, res) {
  const { url } = req.query;
  if (!url) {
    return res.status(400).send("Missing URL");
  }
  res.redirect(url);
}
