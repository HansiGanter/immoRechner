function randomFromList(list: any[]) {
  return list[Math.floor(Math.random() * list.length)];
}
function randomDate(start: Date, end: Date) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  ).toString();
}
const categories = [
  "Kaufpreis",
  "Aufwertung",
  "Sonstige Investitionskosten",
  "Betriebskosten",
  "Instandhaltung",
  "Sonstige Kosten",
  "Mieteinnahmen",
  "Sonstige Einnahmen",
  "Ignorieren",
  "Steuerrelevant",
  "-",
];
const vats = [21, 10, 9.5, 4, 0];
const declarations = [
  "303/210 - Nettomiete",
  "303 - Kosten mit Ust",
  "210 - Kosten ohne Ust",
  "-",
];

// mock tableListDataSource
export function generateMochTransactionList(size: number) {
  const transactions: API.TransactionType[] = [];
  for (let i = 0; i < size; i += 1) {
    const index = i;
    transactions.push({
      key: "key" + index,
      actualBankTransaction: Math.random() < 0.5,
      date: randomDate(new Date(2012, 0, 1), new Date()),
      description: "Something Something" + index,
      amount: Math.floor(Math.random() * 10 + 1),
      balance: Math.floor(Math.random() * 10 + 1),
      category: randomFromList(categories),
      vat: randomFromList(vats),
      declaration: randomFromList(declarations),
    });
  }
  return transactions;
}

let transactions: API.TransactionType[] = [
  {
    key: "key0",
    actualBankTransaction: true,
    date: "Fri Feb 25 2022 22:49:29 GMT+0100 (Central European Standard Time)",
    description: "Something Something0",
    amount: 3,
    balance: 6,
    category: "Kaufpreis",
    vat: 9.5,
    declaration: "-",
  },
  {
    key: "key1",
    actualBankTransaction: false,
    date: "Tue Dec 26 2017 19:30:35 GMT+0100 (Central European Standard Time)",
    description: "Something Something1",
    amount: 3,
    balance: 1,
    category: "Sonstige Einnahmen",
    vat: 21,
    declaration: "-",
  },
  {
    key: "key2",
    actualBankTransaction: true,
    date: "Mon Sep 25 2023 21:56:53 GMT+0200 (Central European Summer Time)",
    description: "Something Something2",
    amount: 9,
    balance: 10,
    category: "Sonstige Investitionskosten",
    vat: 0,
    declaration: "303/210 - Nettomiete",
  },
  {
    key: "key3",
    actualBankTransaction: true,
    date: "Fri Jul 01 2022 13:59:43 GMT+0200 (Central European Summer Time)",
    description: "Something Something3",
    amount: 1,
    balance: 10,
    category: "Kaufpreis",
    vat: 0,
    declaration: "-",
  },
  {
    key: "key4",
    actualBankTransaction: true,
    date: "Tue Feb 23 2021 04:28:48 GMT+0100 (Central European Standard Time)",
    description: "Something Something4",
    amount: 2,
    balance: 4,
    category: "Instandhaltung",
    vat: 21,
    declaration: "303/210 - Nettomiete",
  },
  {
    key: "key5",
    actualBankTransaction: false,
    date: "Sat Jan 20 2018 11:46:17 GMT+0100 (Central European Standard Time)",
    description: "Something Something5",
    amount: 5,
    balance: 6,
    category: "Steuerrelevant",
    vat: 21,
    declaration: "303 - Kosten mit Ust",
  },
  {
    key: "key6",
    actualBankTransaction: false,
    date: "Wed Oct 08 2014 14:45:37 GMT+0200 (Central European Summer Time)",
    description: "Something Something6",
    amount: 5,
    balance: 5,
    category: "-",
    vat: 10,
    declaration: "303 - Kosten mit Ust",
  },
  {
    key: "key7",
    actualBankTransaction: true,
    date: "Sat Oct 27 2012 07:45:22 GMT+0200 (Central European Summer Time)",
    description: "Something Something7",
    amount: 3,
    balance: 1,
    category: "Kaufpreis",
    vat: 4,
    declaration: "-",
  },
  {
    key: "key8",
    actualBankTransaction: true,
    date: "Fri Jul 17 2015 03:44:14 GMT+0200 (Central European Summer Time)",
    description: "Something Something8",
    amount: 4,
    balance: 1,
    category: "Instandhaltung",
    vat: 10,
    declaration: "303/210 - Nettomiete",
  },
  {
    key: "key9",
    actualBankTransaction: true,
    date: "Fri Dec 06 2019 20:14:41 GMT+0100 (Central European Standard Time)",
    description: "Something Something9",
    amount: 9,
    balance: 7,
    category: "Instandhaltung",
    vat: 10,
    declaration: "303/210 - Nettomiete",
  },
  {
    key: "key10",
    actualBankTransaction: false,
    date: "Sun Mar 12 2017 15:01:56 GMT+0100 (Central European Standard Time)",
    description: "Something Something10",
    amount: 10,
    balance: 4,
    category: "Mieteinnahmen",
    vat: 9.5,
    declaration: "303 - Kosten mit Ust",
  },
  {
    key: "key11",
    actualBankTransaction: false,
    date: "Wed Jul 25 2018 03:09:00 GMT+0200 (Central European Summer Time)",
    description: "Something Something11",
    amount: 6,
    balance: 4,
    category: "Instandhaltung",
    vat: 21,
    declaration: "210 - Kosten ohne Ust",
  },
  {
    key: "key12",
    actualBankTransaction: false,
    date: "Fri Aug 02 2019 18:47:19 GMT+0200 (Central European Summer Time)",
    description: "Something Something12",
    amount: 3,
    balance: 10,
    category: "Steuerrelevant",
    vat: 9.5,
    declaration: "210 - Kosten ohne Ust",
  },
  {
    key: "key13",
    actualBankTransaction: true,
    date: "Mon Oct 18 2021 15:45:43 GMT+0200 (Central European Summer Time)",
    description: "Something Something13",
    amount: 6,
    balance: 7,
    category: "Aufwertung",
    vat: 9.5,
    declaration: "303/210 - Nettomiete",
  },
  {
    key: "key14",
    actualBankTransaction: true,
    date: "Thu Oct 31 2024 07:07:47 GMT+0100 (Central European Standard Time)",
    description: "Something Something14",
    amount: 7,
    balance: 4,
    category: "Kaufpreis",
    vat: 0,
    declaration: "-",
  },
  {
    key: "key15",
    actualBankTransaction: true,
    date: "Mon Jul 02 2012 03:38:39 GMT+0200 (Central European Summer Time)",
    description: "Something Something15",
    amount: 9,
    balance: 3,
    category: "Ignorieren",
    vat: 10,
    declaration: "-",
  },
  {
    key: "key16",
    actualBankTransaction: true,
    date: "Wed Mar 07 2018 02:06:02 GMT+0100 (Central European Standard Time)",
    description: "Something Something16",
    amount: 1,
    balance: 6,
    category: "Betriebskosten",
    vat: 21,
    declaration: "210 - Kosten ohne Ust",
  },
  {
    key: "key17",
    actualBankTransaction: true,
    date: "Sun Jun 30 2024 00:06:11 GMT+0200 (Central European Summer Time)",
    description: "Something Something17",
    amount: 9,
    balance: 6,
    category: "Betriebskosten",
    vat: 0,
    declaration: "-",
  },
  {
    key: "key18",
    actualBankTransaction: false,
    date: "Tue Apr 11 2017 17:35:53 GMT+0200 (Central European Summer Time)",
    description: "Something Something18",
    amount: 8,
    balance: 2,
    category: "Ignorieren",
    vat: 10,
    declaration: "210 - Kosten ohne Ust",
  },
  {
    key: "key19",
    actualBankTransaction: false,
    date: "Tue Jan 11 2022 15:42:30 GMT+0100 (Central European Standard Time)",
    description: "Something Something19",
    amount: 7,
    balance: 4,
    category: "Kaufpreis",
    vat: 10,
    declaration: "303/210 - Nettomiete",
  },
  {
    key: "key20",
    actualBankTransaction: false,
    date: "Thu Jan 23 2020 03:36:45 GMT+0100 (Central European Standard Time)",
    description: "Something Something20",
    amount: 8,
    balance: 2,
    category: "Steuerrelevant",
    vat: 21,
    declaration: "-",
  },
  {
    key: "key21",
    actualBankTransaction: false,
    date: "Sat Mar 11 2023 16:33:19 GMT+0100 (Central European Standard Time)",
    description: "Something Something21",
    amount: 6,
    balance: 6,
    category: "Sonstige Einnahmen",
    vat: 9.5,
    declaration: "-",
  },
  {
    key: "key22",
    actualBankTransaction: false,
    date: "Thu Mar 17 2022 14:03:43 GMT+0100 (Central European Standard Time)",
    description: "Something Something22",
    amount: 1,
    balance: 10,
    category: "-",
    vat: 0,
    declaration: "210 - Kosten ohne Ust",
  },
];

export function getTransactionList(): API.TransactionType[] {
  return transactions;
}

export function getTransactionById(key: string) {
  return transactions.find((t) => t.key === key);
}

export function createTransaction(transaction: API.TransactionType) {
  transactions.push(transaction);
  return transactions;
}

export function updateTransaction(
  key: string,
  newTransaction: API.TransactionType
) {
  const index = transactions.findIndex((t) => t.key === key);
  if (index !== -1) {
    transactions[index] = newTransaction;
  }
  return transactions;
}

export function updateOrCreateTransaction(transaction: API.TransactionType) {
  const existingTransaction = getTransactionById(transaction.key);
  if (existingTransaction) {
    updateTransaction(transaction.key, transaction);
  } else {
    createTransaction(transaction);
  }

  return transactions;
}
