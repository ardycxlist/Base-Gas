import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [gas, setGas] = useState(null);
    const [updatedAt, setUpdatedAt] = useState(null);

      async function fetchGas() {
          try {
                const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
                      const gasPrice = await provider.getGasPrice();
                            const gwei = Number(ethers.formatUnits(gasPrice, "gwei")).toFixed(2);
                                  setGas(gwei);
                                        setUpdatedAt(new Date().toLocaleTimeString());
                                            } catch (err) {
                                                  setGas("⚠️ Error fetching");
                                                      }
                                                        }

                                                          useEffect(() => {
                                                              fetchGas();
                                                                }, []);

                                                                  return (
                                                                      <div style={{
                                                                            backgroundColor: "#0d1117",
                                                                                  color: "#fff",
                                                                                        height: "100vh",
                                                                                              display: "flex",
                                                                                                    flexDirection: "column",
                                                                                                          alignItems: "center",
                                                                                                                justifyContent: "center",
                                                                                                                      fontFamily: "Inter, sans-serif",
                                                                                                                            textAlign: "center"
                                                                                                                                }}>
                                                                                                                                      <h1 style={{ color: "#0052ff" }}>⛽ Base Gas Tracker</h1>
                                                                                                                                            <p>Real-time gas price on Base</p>
                                                                                                                                                  <div style={{
                                                                                                                                                          backgroundColor: "#141c25",
                                                                                                                                                                  borderRadius: "12px",
                                                                                                                                                                          padding: "20px 40px",
                                                                                                                                                                                  margin: "20px 0"
                                                                                                                                                                                        }}>
                                                                                                                                                                                                <h2 style={{ fontSize: "2.5rem", color: "#00c2ff" }}>
                                                                                                                                                                                                          {gas ? `${gas} Gwei` : "Loading..."}
                                                                                                                                                                                                                  </h2>
                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                              <button
                                                                                                                                                                                                                                      onClick={fetchGas}
                                                                                                                                                                                                                                              style={{
                                                                                                                                                                                                                                                        backgroundColor: "#0052ff",
                                                                                                                                                                                                                                                                  color: "#fff",
                                                                                                                                                                                                                                                                            border: "none",
                                                                                                                                                                                                                                                                                      padding: "10px 20px",
                                                                                                                                                                                                                                                                                                borderRadius: "8px",
                                                                                                                                                                                                                                                                                                          cursor: "pointer"
                                                                                                                                                                                                                                                                                                                  }}
                                                                                                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                                                                                                🔄 Refresh
                                                                                                                                                                                                                                                                                                                                      </button>
                                                                                                                                                                                                                                                                                                                                            {updatedAt && (
                                                                                                                                                                                                                                                                                                                                                    <p style={{ fontSize: "0.8rem", color: "#9ca3af", marginTop: "10px" }}>
                                                                                                                                                                                                                                                                                                                                                              Updated at {updatedAt}
                                                                                                                                                                                                                                                                                                                                                                      </p>
                                                                                                                                                                                                                                                                                                                                                                            )}
                                                                                                                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                                                                                                                  }