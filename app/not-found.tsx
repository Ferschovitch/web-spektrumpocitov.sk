import Link from "next/link";

export default function NotFound() {
    return (
        <div style={{ 
            minHeight: "calc(100vh - 68px - 280px)", // Adjusted for Navbar and Footer approx heights
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center", 
            background: "#F5F6F0",
            position: "relative",
            overflow: "hidden",
            padding: "40px 24px"
        }}>
            {/* Animated Background Blobs */}
            <div style={{
                position: "absolute",
                width: "40vw",
                height: "40vw",
                maxWidth: "600px",
                maxHeight: "600px",
                borderRadius: "50%",
                background: "#F5C842",
                opacity: 0.1,
                top: "-15%",
                right: "-10%",
                filter: "blur(60px)",
                animation: "float 8s infinite alternate ease-in-out"
            }} />
            <div style={{
                position: "absolute",
                width: "35vw",
                height: "35vw",
                maxWidth: "500px",
                maxHeight: "500px",
                borderRadius: "50%",
                background: "#5BC8C8",
                opacity: 0.1,
                bottom: "-10%",
                left: "-5%",
                filter: "blur(60px)",
                animation: "float 10s infinite alternate-reverse ease-in-out"
            }} />

            <div style={{ 
                textAlign: "center", 
                position: "relative", 
                zIndex: 1,
                maxWidth: "600px"
            }}>
                <div style={{ 
                    fontSize: "clamp(80px, 15vw, 150px)", 
                    fontWeight: 900, 
                    lineHeight: 1, 
                    color: "rgba(26, 26, 26, 0.05)",
                    fontFamily: "var(--font-serif)",
                    marginBottom: "-40px"
                }}>
                    404
                </div>
                
                <h1 style={{ 
                    fontFamily: "var(--font-serif)", 
                    fontSize: "clamp(28px, 5vw, 42px)", 
                    color: "#1A1A1A",
                    marginBottom: "20px",
                    fontWeight: 700
                }}>
                    Stránka sa kamsi zatúlala...
                </h1>
                
                <p style={{ 
                    fontSize: "17px", 
                    color: "#6B7280", 
                    lineHeight: "1.7",
                    marginBottom: "40px",
                    maxWidth: "500px",
                    margin: "0 auto 40px"
                }}>
                    Niekedy je v poriadku na chvíľu stratiť cestu. Dovoľte nám, aby sme vás nasmerovali späť do bezpečia a pokoja vašej domovskej stránky.
                </p>

                <Link
                    href="/"
                    style={{
                        background: "#1A1A1A",
                        color: "white",
                        padding: "16px 36px",
                        borderRadius: "999px",
                        textDecoration: "none",
                        fontWeight: 700,
                        fontSize: "15px",
                        display: "inline-block",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                        transition: "transform 0.2s, box-shadow 0.2s"
                    }}
                    className="hover-lift"
                >
                    Späť na úvodnú stránku
                </Link>
            </div>

            <style>{`
                @keyframes float {
                    0% { transform: translate(0, 0) scale(1); }
                    100% { transform: translate(30px, 20px) scale(1.1); }
                }
                .hover-lift:hover {
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(0,0,0,0.15);
                }
            `}</style>
        </div>
    );
}
