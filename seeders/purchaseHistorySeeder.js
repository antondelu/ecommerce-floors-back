const PurchaseHistory = require("../models/PurchaseHistory");
module.export = async function () {
  const purchaseHistory = [
    {
      status: "",
      paymentMethod: "Visa Credito",
      productsList: [],
    },
  ];
  await PurchaseHistory.bulkCreate(purchaseHistory);
};
