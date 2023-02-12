let invoices =  {
  unpaid: [],
  paid: [],
  add(name, amount) {
    this.unpaid.push({ name, amount });
  },
  totalDue() {
    return this.unpaid.reduce((total, currentInvoice) => {
      return total + currentInvoice.amount;
    }, 0);
  },
  payInvoice(name) {
    for (let i = 0; i < this.unpaid.length; i += 1) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid.splice(i, 1)[0]);
      }
    }
  },
  totalPaid() {
    return this.paid.reduce((total, currentInvoice) => {
      return total + currentInvoice.amount;
    }, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
