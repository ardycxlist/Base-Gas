setGas(gwei);
                                        setUpdatedAt(new Date().toLocaleTimeString());
                                            } catch (err) {
                                                  setGas("⚠️ Error fetching");
                                                      }
                                                        }

                                                          useEffect(() => {
                                                              fetchGas();
                                          "use client";
import { useEffect, useState } from "react";
import { ethers } from "ethers";

export default function Home() {
  const [gasPrice, setGasPrice] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGas() {
      try {
        const provider = new ethers.JsonRpcProvider("https://mainnet.base.org");
        const gas = await provider.getGasPrice();
        setGasPrice(Number(ethers.formatUnits(gas, "gwei")).toFixed(2));
      } catch (err) {
        setError("Error fetching Gwei");
      }
    }

    fetchGas();
    const interval = setInterval(fetchGas, 10000); // update setiap 10 detik
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#0d1117",
        color: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", color: "#3b82f6" }}>⛽ Base Gas Tracker</h1>
      {error ? (
        <p style={{ color: "orange", marginTop: "1rem" }}>{error}</p>
      ) : gasPrice ? (
        <h2 style={{ marginTop: "1rem" }}>{gasPrice} Gwei</h2>
      ) : (
        <p>Loading...</p>
      )}
      <p style={{ marginTop: "1rem", fontSize: "0.8rem", color: "#aaa" }}>
        Updates every 10 seconds
      </p>
    </main>
  );
}                                                                                                                                                                                                      );
                                                                                                                                                                                                                                                                                                                                                                                  }
