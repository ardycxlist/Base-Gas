import { useEffect, useState } from "react";

export default function Home() {
  const [gas, setGas] = useState("Loading...");
    const [updatedAt, setUpdatedAt] = useState("");

      async function fetchGas() {
          try {
                const res = await fetch("/api/gas");
                      const data = await res.json();

                            if (data.gwei) {
                                    setGas(`${data.gwei.toFixed(2)} Gwei`);
                                            setUpdatedAt(new Date().toLocaleTimeString());
                                                  } else {
                                                          setGas("Error fetching Gwei");
                                                                }
                                                                    } catch {
                                                                          setGas("Error fetching Gwei");
                                                                              }
                                                                                }

                                                                                  useEffect(() => {
                                                                                      fetchGas();
                                                                                          const interval = setInterval(fetchGas, 10000);
                                                                                              return () => clearInterval(interval);
                                                                                                }, []);

                                                                                                  return (
                                                                                                      <div style={{
                                                                                                            backgroundColor: "#0d1117",
                                                                                                                  color: "white",
                                                                                                                        minHeight: "100vh",
                                                                                                                              display: "flex",
                                                                                                                                    flexDirection: "column",
                                                                                                                                          justifyContent: "center",
                                                                                                                                                alignItems: "center"
                                                                                                                                                    }}>
                                                                                                                                                          <h1 style={{ fontSize: "2rem", color: "#3b82f6", marginBottom: "1rem" }}>⛽ Base Gas Tracker</h1>
                                                                                                                                                                <p style={{ color: "#facc15", fontSize: "1.5rem" }}>{gas}</p>
                                                                                                                                                                      <p style={{ color: "#9ca3af", marginTop: "1rem" }}>
                                                                                                                                                                              Updates every 10 seconds {updatedAt && `• Last update: ${updatedAt}`}
                                                                                                                                                                                    </p>
                                                                                                                                                                                        </div>
                                                                                                                                                                                          );
                                                                                                                                                                                          }
