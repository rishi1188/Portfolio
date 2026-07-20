export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Designed & Built with{" "}
          <span className="text-neon-cyan">{"<3"}</span>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
