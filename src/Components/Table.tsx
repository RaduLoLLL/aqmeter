import React, { useEffect, useState } from "react";

function Table() {
  const [data, setData] = useState<Invoice[]>([
    {
      erpPaymentId: "5264",
      erpInvoiceId: "597193",
      documentType: "Chitanță",
      invoiceSerial: "GQDO",
      invoiceNumber: "4038614",
      documentDate: "2022-05-18T20:04:20",
      invoiceValue: 55.7,
    },
    {
      erpPaymentId: "7863",
      erpInvoiceId: "603644",
      documentType: "Chitanță",
      invoiceSerial: "VSKH",
      invoiceNumber: "0297512",
      documentDate: "2021-05-04T13:20:05",
      invoiceValue: 15.25,
    },
    {
      erpPaymentId: "9797",
      erpInvoiceId: "703667",
      documentType: "Plată online",
      invoiceSerial: "TIIX",
      invoiceNumber: "3105890",
      documentDate: "2021-05-24T12:28:39",
      invoiceValue: 84.3,
    },
    {
      erpPaymentId: "6827",
      erpInvoiceId: "672536",
      documentType: "PayPoint",
      invoiceSerial: "RFRU",
      invoiceNumber: "4998405",
      documentDate: "2021-07-26T22:14:56",
      invoiceValue: 57.41,
    },
    {
      erpPaymentId: "1747",
      erpInvoiceId: "971815",
      documentType: "PayPoint",
      invoiceSerial: "TTPD",
      invoiceNumber: "4242476",
      documentDate: "2021-04-09T23:53:41",
      invoiceValue: 90.57,
    },
    {
      erpPaymentId: "9000",
      erpInvoiceId: "305465",
      documentType: "PayPoint",
      invoiceSerial: "ESSD",
      invoiceNumber: "7889709",
      documentDate: "2022-04-25T13:20:18",
      invoiceValue: 51.07,
    },
    {
      erpPaymentId: "4628",
      erpInvoiceId: "439997",
      documentType: "PayPoint",
      invoiceSerial: "JEAT",
      invoiceNumber: "6456208",
      documentDate: "2021-09-26T19:35:14",
      invoiceValue: 38.11,
    },
    {
      erpPaymentId: "0571",
      erpInvoiceId: "841318",
      documentType: "PayPoint",
      invoiceSerial: "PFNC",
      invoiceNumber: "9747630",
      documentDate: "2021-05-27T00:05:51",
      invoiceValue: 138.35,
    },
    {
      erpPaymentId: "1414",
      erpInvoiceId: "046508",
      documentType: "Chitanță",
      invoiceSerial: "STMV",
      invoiceNumber: "7598517",
      documentDate: "2021-04-06T23:44:10",
      invoiceValue: 127.62,
    },
  ]);

  type Invoice = {
    erpPaymentId: string;
    erpInvoiceId: string;
    documentType: string;
    invoiceSerial: string;
    invoiceNumber: string;
    documentDate: string;
    invoiceValue: number;
  };

  useEffect(() => {
    fetch(`https://test.aqmeter.com/v2/test/payment-history`, {})
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result: any) => {
        console.log("result", result);
        return setData(result);
      })
      .catch((e) => {
        console.error("An error has occured:" + { e });
      });
  }, []);

  const refreshTableData = () => {
    fetch(`https://test.aqmeter.com/v2/test/payment-history`, {})
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((result: any) => {
        console.log("result", result);
        return setData(result);
      })
      .catch((e) => {
        console.error("An error has occured:" + { e });
      });
  };

  return (
    <div className="bg-white p-12 text-c777 md:rounded-md mb-12 max-w-lg md:max-w-none">
      <h2 className="text-3xl">Table</h2>
      <p className="mt-6 text-lg">Just another table example</p>
      <button
        className="bg-gray-200 px-6 py-3 mt-6 rounded-lg"
        onClick={refreshTableData}
      >
        Refresh table data
      </button>
      <div className="overflow-auto md:relative shadow-md  mb-12 mt-3">
        <table className="md:w-full text-sm text-gray-500 dark:text-gray-400 md:table-header-group">
          <thead className="text-md text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="">
              <th className="md:p-6">Nr. Crt</th>
              <th>Payment Id</th>
              <th>Invoice Id</th>
              <th>Document Type</th>
              <th>Invoice Serial</th>
              <th>Invoice Number</th>
              <th>Document Date</th>
              <th className="md:p-6">Invoice Value</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {(data as unknown as Invoice[]).map((invoice: any, i: number) => {
              const rowClass =
                i % 2 === 0
                  ? "bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                  : "bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700";

              return (
                <tr className={rowClass} key={i}>
                  <td className="py-4 px-6">{i}</td>
                  <td className="py-4 px-6">{invoice.erpPaymentId}</td>
                  <td className="py-4 px-6">{invoice.erpInvoiceId}</td>
                  <td className="py-4 px-6">{invoice.documentType}</td>
                  <td className="py-4 px-6">{invoice.invoiceSerial}</td>
                  <td className="py-4 px-6"> {invoice.invoiceNumber}</td>
                  <td className="py-4 px-6">{invoice.documentDate}</td>
                  <td className="py-4 px-6"> {invoice.invoiceValue}</td>
                </tr>
              );
            })}
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="p-6">
                {data
                  .map((invoice) => invoice.invoiceValue)
                  .reduce((partialSum, a) => partialSum + a, 0)
                  .toFixed(1)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
