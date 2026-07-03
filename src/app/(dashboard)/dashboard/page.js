export default function DashboardPage() {
    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "var(--background)",
                color: "var(--text-primary)",
                textAlign: "center",
                padding: "2rem",
            }}
        >
            <h1
                style={{
                    fontSize: "3rem",
                    marginBottom: "1rem",
                }}
            >
                Dashboard
            </h1>

            <p
                style={{
                    fontSize: "1.1rem",
                    color: "var(--text-secondary)",
                    maxWidth: "500px",
                    lineHeight: "1.8",
                }}
            >
                We're building your dashboard experience.
                This section will be available soon with
                courses, analytics, progress tracking,
                and much more.
            </p>
        </main>
    );
}