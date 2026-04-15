"use client";

import { useActionState } from "react";
import { loginAction } from "./actions";

export default function LoginPage() {
    const [state, formAction, isPending] = useActionState(loginAction, null);

    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            backgroundColor: "#F5F6F0"
        }}>
            <div style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width: "100%",
                maxWidth: "400px"
            }}>
                <h1 style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    marginBottom: "1.5rem",
                    textAlign: "center",
                    fontFamily: "Playfair Display, Georgia, serif"
                }}>
                    Prihlásenie (CMS)
                </h1>

                <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Prihlasovacie meno</label>
                        <input
                            type="text"
                            name="username"
                            required
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "0.5rem",
                                border: "1px solid #ccc",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    <div>
                        <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "500" }}>Heslo</label>
                        <input
                            type="password"
                            name="password"
                            required
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                borderRadius: "0.5rem",
                                border: "1px solid #ccc",
                                boxSizing: "border-box"
                            }}
                        />
                    </div>

                    {state?.error && (
                        <div style={{ color: "red", fontSize: "0.875rem", marginTop: "0.5rem" }}>
                            {state.error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isPending}
                        style={{
                            marginTop: "1rem",
                            backgroundColor: "#1A1A1A",
                            color: "white",
                            padding: "0.75rem",
                            borderRadius: "999px",
                            border: "none",
                            fontWeight: "bold",
                            cursor: isPending ? "not-allowed" : "pointer",
                            opacity: isPending ? 0.7 : 1
                        }}
                    >
                        {isPending ? "Overovanie..." : "Prihlásiť sa"}
                    </button>
                </form>
            </div>
        </div>
    );
}
