export const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-bold text-primary">Consumptions</h3>
            <p className="mt-4 max-w-xs text-sm text-text-muted">
              Moderní nástroj pro sledování spotřeby elektřiny a plynu. Šetřete
              peníze i planetu díky chytrému monitoringu.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-main">
              Produkt
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Vlastnosti
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ceník
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Premium
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-main">
              Podpora
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-text-muted">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Ochrana soukromí
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Podmínky užití
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-text-muted">
          <p>
            © {new Date().getFullYear()} Consumptions. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};
