const Header = () => {
  return (
    <header className="text-center space-y-4 animate-fade-in">
      <div className="text-neon-green text-sm font-medium opacity-70">
        <span className="text-neon-cyan">~/</span>social-links
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight glitch-text cursor-default">
        <span className="glitch-text-content text-gradient-green-cyan" data-text="Cícero S. Sousa">
          Cícero S. Sousa
        </span>
      </h1>
      
      <p className="text-base md:text-lg text-muted-foreground font-medium">
        Analista de Dados • Power BI • SQL • Python
      </p>
      
      <div className="text-sm text-neon-green opacity-70 flex items-center justify-center gap-2">
        <span className="text-neon-cyan">&gt;</span>
        <span>Conecte-se comigo nas redes sociais</span>
        <span className="animate-pulse">_</span>
      </div>
    </header>
  );
};

export default Header;
