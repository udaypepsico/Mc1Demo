import { Image } from 'react-native';
import logo from '../assets/img/logos/PepsiCo_logo.svg.png';
//import bootstrap from '../assets/css/bootstrap.min.css';
// import bootstrap from '../../build/output';
import styles from '../assets/css/style.css';
import fonts from '../assets/fonts/font-awesome/css/font-awesome.min.css';
import img9 from '../assets/img/img-9.jpg';
import img8 from '../assets/img/img-8.jpg';;
import { OpportunityLineItem, Visits } from './Record';

export const HTMlInvoice = ({
    visitConfirmed,
    selectedOpportunityData,
    selectedVisit
}: {
    visitConfirmed: boolean;
    selectedOpportunityData: OpportunityLineItem[];
    selectedVisit: Visits;
}) => {
    return `
  <style>
  .table {
    color: #535353;
}

.invoice-content {
    font-family: 'Helvetica Neue', 'Helvetica', Helvetica, Arial, sans-serif;
    color: #535353;
    font-size: 14px;
}

.invoice-content a {
    text-decoration: none;
}

.invoice-content .img-fluid {
    max-width: 100% !important;
    height: auto;
}

.invoice-content .form-control:focus {
    box-shadow: none;
}

.invoice-content h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: 'Helvetica Neue', sans-serif;
    color: #535353;
}

.mb-0{
    margin-bottom: 0;
}

.mb-10{
    margin-bottom: 10px;
}

.mb-20{
    margin-bottom: 20px;
}

.mb-30{
    margin-bottom: 30px;
}

.container{
    max-width: 1000px;
    margin: 0 auto;
}

/** BTN LG **/
.btn-lg {
    font-size: 14px;
    height: 50px;
    padding: 0 30px;
    line-height: 50px;
    border-radius: 3px;
    color: #ffffff;
    border: none;
    margin: 0 3px 3px;
    display: inline-block;
    vertical-align: middle;
    -webkit-appearance: none;
    text-transform: capitalize;
    transition: all 0.3s linear;
    z-index: 1;
    position: relative;
    overflow: hidden;
    text-align: center;
}

.btn-lg:hover {
    color: #ffffff;
}

.btn-lg:hover:after {
    transform: perspective(200px) scaleX(1.05) rotateX(0deg) translateZ(0);
    transition: transform 0.9s linear, transform 0.4s linear;
}

.btn-lg:after {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    content: "";
    transform: perspective(200px) scaleX(0.1) rotateX(90deg) translateZ(-10px);
    transform-origin: bottom center;
    transition: transform 0.9s linear, transform 0.4s linear;
    z-index: -1;
}

.btn-check:focus+.btn, .btn:focus {
    outline: 0;
    box-shadow: none;
}

.btn-print{
    background-image: linear-gradient(to bottom, #54544d, #1a1918);
}

.btn-print:after {
    background-image: linear-gradient(to bottom, #1a1918, #54544d);
}

.invoice-content .f-w-600 {
    font-weight: 500 !important;
}

.invoice-content .text-14 {
    font-size: 14px;
}

.invoice-content .invoice-table th:first-child,
.invoice-content .invoice-table td:first-child {
    text-align: left;
}

.invoice-content .color-white {
    color: #fff!important;
}

.invoice-content .inv-header-1 {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 24px;
}

.invoice-content .inv-header-2 {
    text-transform: uppercase;
    font-weight: 600;
    font-size: 20px;
}

.invoice-content .inv-title-1 {
    font-weight: 500;
    font-size: 16px;
}

.invoice-content .invo-addr-1 {
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 23px;
}

.invoice-content .item-desc-1 {
    text-align: left;
}

.invoice-content .item-desc-1 span {
    display: block;
}

.invoice-content .item-desc-1 small {
    display: block;
}

.invoice-content .important-notes-list-1 {
    font-size: 14px !important;
    padding-left: 15px;
    margin-bottom: 15px;
}

.invoice-content .important-notes-list-1 li {
    margin-bottom: 5px;
}

.invoice-content .bank-transfer-list-1 {
    font-size: 13px !important;
    padding-left: 0px;
}

.invoice-content .important-notes {
    font-size: 12px !important;
}

.invoice-content .invoice-btn-section {
    text-align: center;
    margin-top: 27px;
}

table th{
    font-weight: 400;
}

.btn-download {
    background: #3965e3;
}

.btn-download:after {
    background: #325cd5;
}

.btn-print{
    background: #3a3939;
}

.btn-print:after {
    background: #1d1c1c;
}

/** Invoice 5 start **/
.invoice-5 {
    padding: 30px 0;
    background: #fff6f6;
}

.invoice-5 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #262525;
}

.invoice-5 .invoice-info {
    background: #fff;
    position: relative;
    padding: 15px;
    z-index: 0;
}

.invoice-5 .name.mb-10{
    margin-bottom: 10px;
}

.invoice-5 .mb-30{
    margin-bottom: 30px;
}

.invoice-5 .invoice-info:before {
    content: "";
    width: 300px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${Image.resolveAssetSource(img8).uri}) top left repeat;
    background-size: cover;
    z-index: -1;
}

.invoice-5 .invoice-info:after {
    content: "";
    width: 300px;
    height: 300px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: url(${Image.resolveAssetSource(img9).uri}) top left repeat;
    background-size: cover;
    z-index: -1;
}

.invoice-5 .invoice-contant{
    background: #fff;
}

.invoice-5 .invoice-contact-us ul{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.invoice-5 .logo img{
    height: 30px;
    margin-top: 8px;
}

.invoice-5 .invoice-headar{
    padding: 30px;
    border-bottom: solid 1px #ebeaea;
}

.invoice-5 .invoice-contact-us ul li{
    font-size: 14px;
    line-height: 25px;
}

.invoice-5 .invoice-contact-us ul li i{
    width: 20px;
}

.invoice-5 .invoice-contact-us ul li a{
    color: #535353;
}

.invoice-5 .inv-title-1 {
    color: #ff1f1f;
    font-weight: 400;
    margin-bottom: 5px;
}

.invoice-5 .name {
    font-size: 18px;
    margin-bottom: 5px;
    font-weight: 500;
    text-transform: uppercase;
    color: #262525;
}

.invoice-5 .table-outer {
    overflow-y: hidden;
    overflow-x: auto;
}

.invoice-5 .default-table thead th {
    position: relative;
    padding: 20px 30px;
    font-size: 15px;
    font-weight: 500;
    line-height: 30px;
    white-space: nowrap;
    color: #262525;
}

.invoice-5 .default-table tbody tr {
    position: relative;
    border-bottom: 1px solid #ECEDF2;
}

.invoice-5 .default-table tr td {
    position: relative;
    padding: 21px 30px;
    font-size: 14px;
    color: #535353;
    font-weight: 400;
}

.invoice-5 .default-table tr td strong{
    font-weight: 500;
}

.invoice-5 .default-table {
    position: relative;
    background: #ffffff;
    border: 0;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    min-width: 550px;
}

.invoice-5 .default-table thead {
    background: #F5F7FC;
    border-radius: 8px;
    color: #ffffff;
}

.invoice-5 .payment-method ul {
    list-style: none;
    padding: 0;
}

.invoice-5 .payment-method ul li strong {
    font-weight: 500;
}

.invoice-5 .invoice-top{
    padding: 30px 30px 0;
    border-bottom: solid 1px #ebeaea;
}

.invoice-5 .order-summary{
    padding: 30px;
    border-bottom: solid 1px #ebeaea;
}

.invoice-5 .invoice-bottom{
    padding: 30px 30px 0;
}

.invoice-5 .invoice-bottom .inv-title-1{
    margin-bottom: 7px;
    color: #262525;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-5 {
        padding: 30px 0;
    }

    .invoice-5 .order-summary .default-table thead th {
        padding: 12px 20px;
    }

    .invoice-5 .order-summary .default-table tr td {
        padding: 12px 20px;
    }
}

@media (max-width: 768px) {
    .invoice-5 .invoice-top {
        padding: 30px 30px 0;
    }

    .invoice-5 .invoice-5 .order-summary {
        padding: 30px;
    }

    .invoice-5 .invoice-contact-us{
        display: none;
    }

    .invoice-2 .invoice-id .info {
        margin: 0 auto 0 0;
        padding: 0;
    }

    .invoice-5 .invoice-bottom {
        padding: 30px 30px 0;
    }

    .invoice-5 .invoice-headar {
        padding: 30px;
    }

    .invoice-5 .invoice-info {
        background: #f5f7fc;
        padding: 0;
    }


    .invoice-5 .default-table tr td {
        padding: 15px 20px;
    }

    .invoice-5 .default-table thead th {
        padding: 15px 20px;
    }

    .invoice-5 .order-summary .default-table thead th {
        padding: 10px 12px;
    }

    .invoice-5 .order-summary .default-table tr td {
        padding: 10px 12px;
    }
}

@media (max-width: 580px){
    .invoice-5 .invoice-contact-us {
        max-width: 100%;
        margin: 0;
    }

    .invoice-5 .invoice-number-inner {
        max-width: 100%;
        margin: 0;
    }

    .invoice-5 .payment-method {
        max-width: 100%;
        margin: 0 0 30px;
    }

    .invoice-5 .logo img {
        height: 25px;
        margin: 0 0 10px;
    }
}
/** Invoice 5 end **/

@media (max-width: 768px) {
    .btn-lg {
        font-size: 13px;
        height: 40px;
        padding: 0 20px;
        line-height: 40px;
        border-radius: 3px;
    }
}


/** Print **/
@media print {
    .col-sm-12 {
        width: 100%;
    }

    .col-sm-11 {
        width: 91.66666667%;
    }

    .col-sm-10 {
        width: 83.33333333%;
    }

    .col-sm-9 {
        width: 75%;
    }

    .col-sm-8 {
        width: 66.66666667%;
    }

    .col-sm-7 {
        width: 58.33333333%;
    }

    .col-sm-6 {
        width: 50%;
    }

    .col-md-8 {
        flex:0 0 auto;
        width:66.66666667%
    }

    .col-md-4 {
        flex:0 0 auto;
        width:33.33333333%
    }

    .col-md-7{
        flex:0 0 auto;
        width:58.33333333%
    }

    .col-md-5{
        flex:0 0 auto;
        width:41.66666667%
    }

    .col-lg-6{
        flex:0 0 auto;
        width:50%
    }

    .col-lg-12{
        flex:0 0 auto;
        width:100%
    }

    .col-sm-5 {
        width: 41.66666667%;
    }

    .col-sm-4 {
        width: 33.33333333%;
    }

    .col-sm-3 {
        width: 25%;
    }

    .col-sm-2 {
        width: 16.66666667%;
    }

    .col-sm-1 {
        width: 8.33333333%;
    }

    .clearfix::after {
        display:block;
        clear:both;
        content:""
    }

    .text-end {
        text-align: right !important;
    }

    .invoice-content .color-white {
        color: #262525!important;
    }

    .invoice-5 .invoice-info:before {
        display: none;
    }

    .invoice-5 .invoice-info:after {
        display: none;
    }

    .invoice-5 .inv-title-1 {
        color: #262525;
    }

    .row{
        display:flex;
        flex-wrap:wrap;
        margin-top:calc(0 * -1);
        margin-right:calc(1.5rem * -.5);
        margin-left:calc(1.5rem * -.5)
    }
    
    .flex-container {
        display: flex;
        background-color: #ccc;
    }

    .justify-content-center{
        justify-content:center!important
    }

}
  </style>  
  <!-- Invoice 5 start -->
  <div class="invoice-5 invoice-content">
      <div class="container">
          <div class="row">
              <div class="col-lg-12">
                  <div class="invoice-inner clearfix">
                      <div class="invoice-info clearfix" id="invoice_wrapper">
                          <div class="invoice-contant">
                              <div class="invoice-headar">
                                    <div class="row">
                                        <div class = "col-sm-12 flex-container justify-content-center">
                                           ${visitConfirmed && !visitConfirmed ? `<h1>Not For Sale</h1>`: ``}
                                        </div>
                                    </div>
                                  <div class="row">
                                      <div class="col-md-8 col-sm-6">
                                          <div class="invoice-logo">
                                              <!-- logo started -->
                                              <div class="logo">  
                                                <img
                                                src=${Image.resolveAssetSource(logo).uri}
                                                alt="logo"
                                                />
                                              </div>
                                              <!-- logo ended -->
                                          </div>
                                      </div>
                                      <div class="col-md-4 col-sm-6">
                                          <div class="invoice-number-inner">
                                              <h2 class="name">Invoice No: #45613</h2>
                                              <p class="mb-0">Invoice Date: <span>21 Sep 2021</span></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="invoice-top">
                                  <div class="row">
                                      <div class="col-md-4 col-sm-6 mb-30">
                                          <div class="invoice-number">
                                              <h4 class="inv-title-1">Invoice To</h4>
                                              <h2 class="name mb-10">${selectedVisit.Account?.Name}</h2>
                                          </div>
                                      </div>
                                      <div class="col-md-4 col-sm-6 mb-30">
                                          <div class="invoice-number">
                                              <div class="invoice-number-inner">
                                                  <h4 class="inv-title-1">Invoice From</h4>
                                                  <h2 class="name mb-10">Animas Roky</h2>
                                                  <p class="invo-addr-1 mb-0">
                                                      Apexo Inc  <br/>
                                                      billing@apexo.com <br/>
                                                      169 Teroghoria, Bangladesh <br/>
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                                      <div class="col-md-4 col-sm-6 mb-30 invoice-contact-us">
                                          <h4 class="inv-title-1">Get In Touch</h4>
                                          <h2 class="name mb-10">Contact Us</h2>
                                          <ul class="link">
                                              <li>
                                                  <i class="fa fa-map-marker"></i> 169 Teroghoria, Bangladesh
                                              </li>
                                              <li>
                                                  <i class="fa fa-envelope"></i> <a href="mailto:sales@hotelempire.com">info@themevessel.com</a>
                                              </li>
                                              <li>
                                                  <i class="fa fa-phone"></i> <a href="tel:+55-417-634-7071">+00 123 647 840</a>
                                              </li>
                                          </ul>
                                      </div>
                                  </div>
                              </div>
                              <div class="invoice-center">
                                  <div class="order-summary">
                                      <div class="table-outer">
                                          <table class="default-table invoice-table">
                                              <thead>
                                              <tr>
                                                  <th>Product Name</th>
                                                  <th>Product Quantity</th>
                                                  <th>Product UnitPrice</th>
                                                  <th>Product TotalPrice</th>
                                              </tr>
                                              </thead>
  
                                              <tbody>
                                              ${selectedOpportunityData
            .map((item) => lineItems(item))
            .join('')}
                                              <tr>
                                                  <td><strong>Total Price</strong></td>
                                                  <td></td>
                                                  <td></td>
                                                  <td><strong>${selectedOpportunityData
            .reduce((partialSum, a) => partialSum + (Number(a.Quantity) * Number(a.UnitPrice)), 0)}</strong></td>
                                              </tr>
                                              </tbody>
                                          </table>
                                      </div>
                                  </div>
                              </div>
                              <div class="invoice-bottom">
                                  <div class="row">
                                      <div class="col-lg-6 col-md-7 col-sm-7">
                                          <div class="terms-conditions mb-30">
                                              <h3 class="inv-title-1 mb-10">Terms & Conditions</h3>
                                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                                          </div>
                                      </div>
                                      <div class="col-lg-6 col-md-5 col-sm-5">
                                          <div class="payment-method mb-30">
                                              <h3 class="inv-title-1 mb-10">Payment Method</h3>
                                              <ul class="payment-method-list-1 text-14">
                                                  <li><strong>Account No:</strong> 00 123 647 840</li>
                                                  <li><strong>Account Name:</strong> Jhon Doe</li>
                                                  <li><strong>Branch Name:</strong> xyz</li>
                                              </ul>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="invoice-btn-section clearfix d-print-none">
                          <a href="javascript:window.print()" class="btn btn-lg btn-print">
                              <i class="fa fa-print"></i> Print Invoice
                          </a>
                          <a id="invoice_download_btn" class="btn btn-lg btn-download btn-theme">
                              <i class="fa fa-download"></i> Download Invoice
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- Invoice 5 end -->
    `;
};

const lineItems = (value: OpportunityLineItem) => {
    return `<tr>
            <td>${value.Product2.Name}</td>
            <td>${value.Quantity}</td>
            <td>${value.UnitPrice}</td>
            <td>${value.Quantity * value.UnitPrice}</td>
        </tr>`;
};
