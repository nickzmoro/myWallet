import { create } from "zustand";

const getTransactionsFromStorage = () => {
  const savedTransactions = localStorage.getItem("savedTransactions");
  return savedTransactions ? JSON.parse(savedTransactions) : [];
};

const saveTransactionsToStorage = (transactions) => {
  localStorage.setItem("savedTransactions", JSON.stringify(transactions));
};

export const useTransaction = create((set) => ({
  savedTransactions: getTransactionsFromStorage(),
  transactions: [
    {
      value: "",
      typeOfTransaction: "",
      date: "",
      category: "",
      description: "",
    },
  ],

  handleChange: (event) => {
    const { name, value } = event.target;
    set((state) => ({
      transactions: state.transactions.map((transaction, index) => {
        if (index === 0) {
          return {
            ...transaction,
            [name]: value,
          };
        }
        return transaction;
      }),
    }));
  },

  handleSaveTransaction: () => {
    set((state) => {
      const newSavedTransactions = [
        ...state.savedTransactions,
        {
          ...state.transactions[0],
          value: Number(state.transactions[0].value),
        },
      ];
      saveTransactionsToStorage(newSavedTransactions);
      return {
        savedTransactions: newSavedTransactions,
        transactions: [
          {
            value: "",
            typeOfTransaction: "",
            date: "",
            category: "",
            description: "",
          },
        ],
      };
    });
  },

  handleDelete: (index) => {
    set((state) => {
      const newSavedTransactions = state.savedTransactions.filter(
        (_, i) => i !== index
      );
      saveTransactionsToStorage(newSavedTransactions);
      return {
        ...state,
        savedTransactions: newSavedTransactions,
      };
    });
  },
}));
