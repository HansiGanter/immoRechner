declare namespace API {
  type TransactionType = {
    key: string;
    actualBankTransaction: boolean;
    date: string;
    description: string;
    amount: number;
    balance: number;
    category:
      | "Kaufpreis"
      | "Aufwertung"
      | "Sonstige Investitionskosten"
      | "Betriebskosten"
      | "Instandhaltung"
      | "Sonstige Kosten"
      | "Mieteinnahmen"
      | "Sonstige Einnahmen"
      | "Ignorieren"
      | "Steuerrelevant"
      | "-";
    vat: 21 | 10 | 9.5 | 4 | 0;
    declaration:
      | "303/210 - Nettomiete"
      | "303 - Kosten mit Ust"
      | "210 - Kosten ohne Ust"
      | "-";
  };
}
