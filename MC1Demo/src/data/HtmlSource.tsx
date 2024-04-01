import { ProductsType } from './Products';

export const source1 = {
  html: `
      <header style="max-width: 1200px;
        overflow: hidden;
        box-sizing: border-box;
        margin: 20px auto;
        text-align: center;">
        <nav style="padding: 20px 0 0;
            max-width: 400px;
            margin: 0 auto;">
            <a style="display: inline-block;
              color: #666666;
              text-decoration: none;
              font-size: 14px;
              cursor: pointer;" href="#section1">Section 1</a>
            <a style="display: inline-block;
              color: #666666;
              text-decoration: none;
              font-size: 14px;
              cursor: pointer;" href="#section1" href="#section2">Section 2</a>
        </nav>
      </header>
      <header style="display: none;
        position: fixed;
        width:100%,
        top: 0;
        background: #FFFFFF;
        margin: 0 -15px;
        width: 100%;
        border-bottom: 1px solid #CCCCCC;
        box-sizing: border-box;
        box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.5);
        opacity: 0.9;
        z-index: 100;">
        <div style="max-width: 1200px;
            padding: 15px 30px;
            margin: 0 auto;
            overflow: hidden;
            box-sizing: border-box;">
            <nav style="padding: 5px 0;
              max-width: 400px;
              float: right;
              text-align: right;">
              <a style="display: inline-block;
                  color: #666666;
                  text-decoration: none;
                  font-size: 14px;
                  cursor: pointer;" href="#section1">Section 1</a>
              <a style="display: inline-block;
                  color: #666666;
                  text-decoration: none;
                  font-size: 14px;
                  cursor: pointer;" href="#section2">Section 2</a>
            </nav>
        </div>
      </header>
      <div style="min-width: 300px;
        margin: 0 auto;
        height: 1000px;
        position: relative;
      ">
        <div style="min-height: 100px;position: relative; background: #ffd6cd; width=100vw;" id="section1">
            <h1 style="text-align: center;
              line-height: 500px;
              color: #666666;
              margin: 0;">Section 1</h1>
        </div>
        <div style="min-height: 100px;position: relative; background: #ddebfd; width=100vw;" id="section2">
            <h1 style="text-align: center;
              line-height: 500px;
              color: #666666;
              margin: 0;">Section 2</h1>
        </div>
      </div>
      </div>
    `,
};

const setTotalprice = (
  productPrice: string,
  productQuantity: string
): string => {
  return (+productPrice * +productQuantity).toFixed(2);
};

export const spanText = (value: ProductsType) => {
  return `<div style="border:1px solid white;background-color:black;justify-content: space-around;">
           <div style="display: inline-block;vertical-align: top;padding: 10px; height:100px;width:80px;">
              <img
              width="100%" height="100%"
              style="object-fit: fill;object-position: 50% 50%;"
              src=${value.imageSource}
              alt="Prod"
              />
            </div>
            <div style="display: inline-block;vertical-align: top;width:50%">
              <div style="vertical-align: top; padding:10px">
                <div style="font-weight: bold;font-size: large;">
                  ${value.productName}
                </div>
                <div style="font-weight: normal;font-size: small;">
                  ${value.productWeight}
                </div>
              </div>
              <div style="padding:20px 10px 10px;font-weight: bolder;font-size: x-large;vertical-align:bottom;">
                $${value.productPrice}
              </div>
            </div>
            <div style="display: inline-block;vertical-align: top;">
              <div style="padding:10px;font-weight: normal;font-size: small;">
                x ${value.productQuantity}
              </div>
            </div>
           <div style="display: inline-block;vertical-align: bottom;">
            <div style="padding:10px;font-weight: bolder;font-size: x-large;">
               $${setTotalprice(value.productPrice, value.productQuantity)}
            </div>
          </div>
          </div>`;
};

const productText = (value : ProductsType) => {
  return `<tr class="item">
            <td style="width:15%;">
              <img
                width="50" height="50"
                style="object-fit: fill;object-position: 50% 50%;"
                src=${value.imageSource}
                alt="Prod"
              />
            </td>
            <td style="width:20%;text-align:left">
                ${value.productName}
            </td>
            <td style="width:10%; text-align:center;">
                ${value.productQuantity}
            </td>
            <td style="width:15%; text-align:right;">
               ${value.productWeight}
            </td>
            <td style="width:20%; text-align:right;">
               $${value.productPrice}
            </td>
            <td style="width:20%; text-align:right;">
               $${setTotalprice(value.productPrice, value.productQuantity)}
            </td>
        </tr>`;
}

export const sourceHtml = ({
  products,
  totalOrderQty,
  totalPrice,
  taxPrice,
  grandTotalPrice,
}: {
  products: ProductsType[];
  totalOrderQty:number;
  totalPrice: string;
  taxPrice: string;
  grandTotalPrice: string;
}) => {
  return `<div style="color: white; font-size: 2rem;">
            ${products.map((product) => spanText(product)).join('')}
            <div style="border:1px solid white;background-color:black;padding-top:10px;padding-bottom:10px">
              <div style="display: inline-block;width:40%;text-align: center;">
               Total Units
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               ${totalOrderQty}
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               Sub Total
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               $${totalPrice}
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               Tax @ 16%
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               $${taxPrice}
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               Grand Total
              </div>
              <div style="display: inline-block;width:40%;text-align: center;">
               $${grandTotalPrice}
              </div>
            </div>
          </div>`;
};


export const HTMlInvoice =  ({
  customerName,
  customerPhone,
  customerAddress,
  storeManagerEmail,
  storeManagerPhone,
  products,
  totalOrderQty,
  totalPrice,
  taxPrice,
  grandTotalPrice,
  signature,
}: {
  customerName: string,
  customerPhone: string,
  customerAddress: string,
  storeManagerEmail: string,
  storeManagerPhone: string,
  products: ProductsType[];
  totalOrderQty:number;
  totalPrice: string;
  taxPrice: string;
  grandTotalPrice: string;
  signature?:string;
}) => {
  return `
  <style>
  .top_rw{ background-color:#f4f4f4; }
	.td_w{ }
	button{ padding:5px 10px; font-size:14px;}
    .invoice-box {
        max-width: 890px;
        margin: auto;
        padding:10px;
        border: 1px solid #eee;
        box-shadow: 0 0 10px rgba(0, 0, 0, .15);
        font-size: 14px;
        line-height: 24px;
        font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
        color: #555;
    }
    .invoice-box table {
        width: 100%;
        line-height: inherit;
        text-align: left;
		border-bottom: solid 1px #ccc;
    }
    .invoice-box table td {
        padding: 5px;
        vertical-align:middle;
    }
    .invoice-box table tr td:nth-child(2) {
        text-align: right;
    }
    .invoice-box table tr.top table td {
        padding-bottom: 20px;
    }
    .invoice-box table tr.top table td.title {
        font-size: 45px;
        line-height: 45px;
        color: #333;
    }
    .invoice-box table tr.information table td {
        padding-bottom: 40px;
    }
    .invoice-box table tr.heading td {
        background: #eee;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
		font-size:12px;
    }
    .invoice-box table tr.details td {
        padding-bottom: 20px;
    }
    .invoice-box table tr.item td{
        border-bottom: 1px solid #eee;
    }
    .invoice-box table tr.item.last td {
        border-bottom: none;
    }
    .invoice-box table tr.total td:nth-child(2) {
        border-top: 2px solid #eee;
        font-weight: bold;
    }
    @media only screen and (max-width: 600px) {
        .invoice-box table tr.top table td {
            width: 100%;
            display: block;
            text-align: center;
        }
        .invoice-box table tr.information table td {
            width: 100%;
            display: block;
            text-align: center;
        }
    }
    /** RTL **/
    .rtl {
        direction: rtl;
        font-family: Tahoma, 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    }
    .rtl table {
        text-align: right;
    }
    .rtl table tr td:nth-child(2) {
        text-align: left;
    }
  </style>
  <div class="invoice-box">
      <table cellpadding="0" cellspacing="0">
  <tr class="top_rw">
     <td colspan="2">
        <h1 style="margin-bottom: 0px;"> INVOICE</h1>
      <span style=""> Number: 27B00032991LQ354 Date: 21-11-2018 </span>
     </td>
      <td  style="width:30%; margin-right: 10px;">
          Order Id: 6580083283
     </td>
  </tr>
          <tr class="top">
              <td colspan="3">
                  <table>
                      <tr>
                          <td>
            <b> ${customerName}</b> <br>
            #${customerPhone} <br>
            ${customerAddress} <br>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr class="information">
                <td colspan="3">
                  <table>
                      <tr>
                          <td colspan="2">
            <b> Shipping Address: </b> <br>
            ${customerAddress} <br>
                              ${storeManagerPhone}
                          </td>
                          <td> <b> Billing Address: ${storeManagerEmail} </b><br>
                              Acme Corp.<br>
                              John Doe<br>
                              ${storeManagerEmail}
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
                          <td colspan="3">
          <table cellspacing="0px" cellpadding="2px">
          <tr class="heading">
          <td style="width:15%;">

             </td>
              <td style="width:20%;text-align:left">
                  ITEM
              </td>
      <td style="width:10%; text-align:center;">
                  QTY.
              </td>
              <td style="width:15%; text-align:right;">
                  PRODUCT WEIGHT
              </td>
       <td style="width:20%; text-align:right;">
                  PRICE PER UNIT (USD)
              </td>
       <td style="width:20%; text-align:right;">
                 TOTAL AMOUNT (USD)
              </td>
          </tr>
          ${products.map((product) => productText(product)).join('')}
    </td>
    </table>
          <tr class="total">
                <td align="right" colspan = "3">  Total units :  <b> ${totalOrderQty} </b> </td>
          </tr>
          <tr class="total">
                <td align="right" colspan = "3">  Sub total :  <b> $${totalPrice} </b> </td>
          </tr>
          <tr class="total">
                <td align="right" colspan = "3">  Tax @ 16% :  <b> $${taxPrice} </b> </td>
          </tr>
          <tr class="total">
                <td align="right" colspan = "3">  Grand Total :  <b> $${grandTotalPrice} </b> </td>
          </tr>
    <tr>
       <td colspan="3">
         <table cellspacing="0px" cellpadding="2px">
          <tr>
                <td width="50%">
          <b> Declaration: </b> <br>
We declare that this invoice shows the actual price of the goods
described above and that all particulars are true and correct. The
goods sold are intended for end user consumption and not for resale.
          </td>
          <td>
           * This is a computer generated invoice and does not
            require a physical signature
          </td>
            </tr>
         <tr>
            <td width="50%">
            </td>
            <td>
              <b> Authorized Signature </b>
            <td>
         </tr>
         <tr>
            <td width="50%">
            </td>
            <td align="right">
                  <img
                  width="200" height="100"
                  style="object-fit: contain;object-position: 50% 50%;"
                  src=${signature}
                  alt="Signature"
                  />
            </td>
         </tr>
            <td width="50%">
            </td>
            <td valign="top">
                  ...................................
                  <br>
                  <br>
                  <br>
            </td>
         </tr>
         </table>
       </td>
    </tr>
      </table>
  </div>
`
}
