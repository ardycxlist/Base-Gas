export default async function handler(req, res) {
      try {
          const rpcUrl = "https://base.publicnode.com"; // tetap pakai RPC publik

              const response = await fetch(rpcUrl, {
                    method: "POST",
                          headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({
                                        jsonrpc: "2.0",
                                                method: "eth_gasPrice",
                                                        params: [],
                                                                id: 1,
                                                                      }),
                                                                          });

                                                                              const data = await response.json();

                                                                                  if (data.result) {
                                                                                        const gwei = parseInt(data.result, 16) / 1e9;
                                                                                              res.status(200).json({ gwei });
                                                                                                  } else {
                                                                                                        res.status(500).json({ error: "Failed to fetch gas price" });
                                                                                                            }
                                                                                                              } catch (error) {
                                                                                                                  res.status(500).json({ error: "Error fetching Gwei" });
                                                                                                                    }
                                                                                                                    }
}