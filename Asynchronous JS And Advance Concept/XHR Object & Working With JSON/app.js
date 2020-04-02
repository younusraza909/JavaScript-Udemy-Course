document.getElementById("button1").addEventListener("click", loadCoustomer);

function loadCoustomer(e) {
  //Initiate xhr object
  xhr = new XMLHttpRequest();

  //Open
  xhr.open("GET", "customer.json", true);

  //Onload
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);

      const output = `
      <ul>
      <li>ID:${customer.id}</li>
      <li>Name:${customer.name}</li>
      <li>Company:${customer.company}</li>
      <li>Phone:${customer.phone}</li>
      </ul>`;

      document.getElementById("customer").innerHTML = output;
    }
  };

  //Send
  xhr.send();
}

//For Customers
document.getElementById("button2").addEventListener("click", loadCustomers);

function loadCustomers(e) {
  //Initiate xhr object
  const xhr = new XMLHttpRequest();

  //Open
  xhr.open("GET", "customers.json", true);

  //Onload
  xhr.onload = function() {
    if ((this.status = 200)) {
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = "";

      customers.forEach(function(customer) {
        output += `
      <ul>
      <li>ID:${customer.id}</li>
      <li>Name:${customer.name}</li>
      <li>Company:${customer.company}</li>
      <li>Phone:${customer.phone}</li>
      </ul>`;
      });

      document.getElementById("customers").innerHTML = output;
    }
  };

  //Send
  xhr.send();
}
