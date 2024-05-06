import { Image } from 'react-native';
import logo from '../assets/img/logos/logo.png';
//import bootstrap from '../assets/css/bootstrap.min.css';
// import bootstrap from '../../build/output';
import styles from '../assets/css/style.css';
import fonts from '../assets/fonts/font-awesome/css/font-awesome.min.css';
import img9 from '../assets/img/img-9.jpg';
import img8 from '../assets/img/img-8.jpg';
import img11 from '../assets/img/img-11.png';
import img10 from '../assets/img/img-10.png';
import img12 from '../assets/img/img-12.png';
import { OpportunityLineItem, Visits } from './Record';

export const HTMlInvoice = ({
  example,
  selectedOpportunityData,
  selectedVisit
}: {
  example: string;
  selectedOpportunityData: OpportunityLineItem[];
  selectedVisit:Visits;
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
    font-family: 'Poppins', sans-serif;
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

/** Invoice 1 Start **/
.invoice-1 {
    padding: 30px 0;
    background: #fff6f6;
}

.invoice-1 .mb-30 {
    margin-bottom: 30px;
}

.invoice-1 .invoice-info {
    background: #fff;
    position: relative;
}

.invoice-1 .name{
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #262525;
    font-weight: 500;
}

.invoice-1 .mb-10{
    margin-bottom: 10px;
}

.invoice-1 .invoice-headar {
    height: 125px;
    margin-bottom: 25px;
    background: #f3f3f3;
}

.invoice-1 .invoice-headar p span{
    float: right;
}

.invoice-1 .invoice-number-inner{
    max-width: 200px;
    margin-left: auto;
}

.invoice-1 .invoice-id .info{
    max-width: 200px;
    margin:0 50px 0 auto;
    padding: 34px 0;
}

.invoice-1 .invoice-id{
    border-radius: 75px 0 0 75px;
    z-index: 0;
    background-image: linear-gradient(to bottom, #ff0000, #ff8100);
}

.invoice-1 .payment-method-list-1{
    padding: 0;
}

.invoice-1 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
}

.invoice-1 .payment-method{
    max-width: 200px;
    margin-left: auto;
}

.invoice-1 .payment-method ul {
    list-style: none;
}

.invoice-1 .payment-method ul li strong{
    font-weight: 500;
}

.invoice-1 .table-striped > tbody > tr:nth-of-type(odd) {
    --bs-table-accent-bg: rgb(255 255 255 / 5%);
    color: var(--bs-table-striped-color);
}

.invoice-1 table th {
    font-weight: 500;
    text-transform: uppercase;
}

.invoice-1 .invoice-top {
    padding: 40px 50px 10px;
    font-size: 15px;
}

.invoice-1 .inv-title-1{
    color: #ff3200;
    margin-bottom: 5px;
}

.invoice-1 .invoice-logo{
    padding: 50px;
}

.invoice-1 .invoice-logo img {
    height: 25px;
}

.invoice-1 .table-section {
    text-align: center;
}

.invoice-1 .invoice-center {
    padding: 0 50px 40px;
}

.invoice-1 .table > :not(caption) > * > * {
    padding: 13px 30px;
}

.invoice-1 .table > :not(caption) > * > * {
    background-color: var(--bs-table-bg);
    border-bottom-width: 0;
}

.invoice-1 .table .pl0{
    padding-left: 0;
}

.invoice-1 .table td.pl0{
    padding-left: 0;
}

.invoice-1 .table td, .invoice-1 .table th {
    vertical-align: middle;
    border: none !important;
}

.invoice-1 .table td {
    font-size: 15px;
    color: #555;
}

.invoice-1 p{
    font-size: 14px;
}

.invoice-1 .invoice-info-buttom .table .invoice-1 .invoice-info-buttom .table tr, .table tr {
    border: 1px solid #e9ecef;
}

.invoice-1 .caption-top {
    caption-side: top;
    text-align: right;
    margin-bottom: 0;
}

.invoice-1 .invoice-bottom {
    padding: 0 50px 10px;
}

.invoice-1 .bg-active {
    background: #f3f3f3;
    color: #535353!important;
}

.invoice-1 .active-color{
    color: #ff3200!important;
}

.invoice-1 .invoice-bottom h3 {
    margin-bottom: 7px;
}

.invoice-1 .contact-info {
    padding: 30px 50px;
    border-radius: 0 40px 40px 0;
    background-image: linear-gradient(to bottom, #f3f3f3, #ffffff);
}

.invoice-1 .contact-info a {
    margin-right: 20px;
    color: #535353;
    font-size: 14px;
}

.invoice-1 .contact-info .mr-0{
    margin-right: 0;
}

.invoice-1 .inv-header-1 {
    font-weight: 600;
}

.invoice-1 .invoice-contact::after {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 30%;
    height: 30px;
    border-radius: 15px 0 0 15px;
    z-index: 0;
    background-image: linear-gradient(to bottom, #ff0000, #ff8100);
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-1 {
        padding: 30px 0;
    }
}

@media (max-width: 768px) {
    .invoice-1 .table > :not(caption) > * > * {
        padding: 15px 10px;
    }

    .invoice-1.invoice-content .color-white {
        color: #262525!important;
    }

    .invoice-1 .payment-method {
        margin: 0 auto 30px 0;
    }

    .invoice-1 .invoice-top {
        padding: 30px 30px 0;
    }

    .invoice-1 .contact-info {
        padding: 30px;
        border-radius: 0;
    }

    .invoice-1 .invoice-center {
        padding: 0 30px 30px;
    }

    .invoice-1 .invoice-contact::after {
        display: none;
    }

    .invoice-1 .invoice-bottom {
        padding: 0 30px;
    }

    .invoice-1 .invoice-id {
        background: transparent;
    }

    .invoice-1 .invoice-logo {
        padding: 0;
        margin-bottom: 10px;
    }

    .invoice-1 .invoice-headar {
        height: auto;
        margin-bottom: 0;
        padding: 30px;
    }

    .invoice-1 .invoice-id .info {
        margin: 0 auto 0 15px;
        padding: 0;
    }

    .invoice-1 .invoice-number-inner {
        margin: 0 auto 0 0;
    }
}

@media (max-width: 580px){
    .invoice-1 .invoice-id .info {
        margin: 0 auto 0 15px;
    }

    .invoice-1 .invoice-id .info {
        margin: 0 auto 0 0;
    }

    .invoice-1 .d-none-580{
        display: none!important;
    }
}
/** Invoice 1 end **/

/** Invoice 2 Start **/
.invoice-2 {
    padding: 30px 0;
    background: #fff6f6;
}

.invoice-2 .mb-30{
    margin-bottom: 30px;
}

.invoice-2 .invoice-info {
    background: #fff;
    position: relative;
}

.invoice-2 .name{
    font-size: 18px;
    margin-bottom: 10px;
    text-transform: uppercase;
    color: #262525;
    font-weight: 500;
}

.invoice-2 .invoice-number-inner{
    max-width: 200px;
    margin-left: auto;
}

.invoice-2 .payment-method-list-1{
    padding: 0;
}

.invoice-2 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
}

.invoice-2 .payment-method ul {
    list-style: none;
}

.invoice-2 .payment-method ul li strong{
    font-weight: 500;
}

.invoice-2 .table-striped > tbody > tr:nth-of-type(odd) {
    --bs-table-accent-bg: rgb(255 255 255 / 5%);
    color: var(--bs-table-striped-color);
}

.invoice-2 .invoice-top {
    padding: 40px 50px 10px;
    font-size: 15px;
}

.invoice-2 .inv-title-1{
    color: #2672f9;
    margin-bottom: 5px;
}

.invoice-2 .invoice-logo{
    clip-path: polygon(0 0, 100% 0, 100% 0%, 85% 100%, 0% 100%);
    width: 340px;
}

.invoice-2 .invoice-logo:before {
    width: 310px;
    background: #f3f3f3;
    position: absolute;
    content: "";
    height: 110px;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 87% 100%, 0% 100%);
}

.invoice-2 .invoice-logo:after {
    width: 330px;
    position: absolute;
    content: "";
    height: 95px;
    top: 0;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 90% 100%, 0% 100%);
    z-index: -9;
    background-image: linear-gradient(to bottom, #0095ff, #4a50f3);
}

.invoice-2 .invoice-logo .logo{
    width: 290px;
    padding: 50px;
    clip-path: polygon(0 0, 100% 0, 100% 0%, 85% 100%, 0% 100%);
    height: 125px;
    z-index: 999;
    background-image: linear-gradient(to bottom, #0095ff, #4a50f3);
}

.invoice-2 .invoice-logo img {
    height: 25px;
}

.invoice-2 .invoice-id .info {
    max-width: 200px;
    margin: 0 50px 0 auto;
    padding: 35px 0 0;
}

.invoice-2 .table-section {
    text-align: center;
}

.invoice-2 .invoice-center {
    padding: 0 50px 40px;
}

.invoice-2 .table > :not(caption) > * > * {
    padding: 13px 30px;
}

.table > :not(caption) > * > * {
    background-color: var(--bs-table-bg);
    border-bottom-width: 0;
}

.invoice-2 .table .pl0{
    padding-left: 0;
}

.invoice-2 .table td.pl0{
    padding-left: 0;
}

.invoice-2 .table td, .invoice-2 .table th {
    vertical-align: middle;
    border: none !important;
}

.invoice-2 .table td {
    font-size: 15px;
    color: #555;
}

.invoice-2 p{
    font-size: 14px;
}

.invoice-2 .invoice-info-buttom .table .invoice-2 .invoice-info-buttom .table tr, .table tr {
    border: 1px solid #e9ecef;
}

.invoice-2 .caption-top {
    caption-side: top;
    text-align: right;
    margin-bottom: 0;
}

.invoice-2 .invoice-bottom {
    padding: 0 50px 10px;
}

.invoice-2 .bg-active {
    background: #f3f3f3;
    color: #262525!important;
}

.invoice-2 .active-color{
    color: #2672f9!important;
}

.invoice-2 .invoice-bottom h3 {
    margin-bottom: 7px;
}

.invoice-2 .invoice-contact{
    background-image: linear-gradient(to bottom, #0095ff, #4a50f3);
    padding: 30px 50px 20px;
}

.invoice-2 .contact-info a {
    margin:0 30px 10px 0;
    color: #fff;
    font-size: 14px;
    float: left;
    line-height: 50px;
}

.invoice-2 .contact-info a i{
    width: 50px;
    height: 50px;
    background: #ffffff;
    text-align: center;
    font-size: 20px;
    line-height: 50px;
    margin-right: 10px;
    color: #2672f9;
    border-radius: 60px;
}

.invoice-2 .invoice-contact h3{
    font-size: 20px;
}

.invoice-2 .contact-info .mr-0{
    margin-right: 0;
}

.invoice-2 .inv-header-1 {
    font-weight: 600;
    color: #2672f9;
    font-size: 30px;
}

.invoice-2 table th {
    font-weight: 500;
    border: none!important;
}

.invoice-2 .order-summary tbody, td, tfoot, th, thead, tr {
    border: none;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-2 {
        padding: 30px 0;
    }

    .invoice-2 .contact-info a i {
        width: auto;
        height: 20px;
        background: transparent;
        text-align: left;
        font-size: 20px;
        line-height: 20px;
        color: #fff;
        margin-right: 5px;
    }

    .invoice-2 .contact-info a {
        margin: 0 20px 10px 0;
        line-height: 20px;
    }
}

@media (max-width: 768px) {
    .invoice-2 .table > :not(caption) > * > * {
        padding: 15px 10px;
    }

    .invoice-2 .invoice-contact {
        background: #f3f3f3;
    }

    .invoice-2 .contact-info a {
        color: #535353;
    }

    .invoice-2 .contact-info a i{
        color: #535353;
    }

    .invoice-2 .invoice-top {
        padding: 30px 30px 0;
    }

    .invoice-2 .invoice-center {
        padding: 0 30px 30px;
    }

    .invoice-2 .invoice-bottom {
        padding: 0 30px 0;
    }

    .invoice-2 .invoice-contact {
        padding: 30px 30px 20px;
    }

    .invoice-2 .invoice-number-inner {
        margin: 0 auto 0 0;
    }

    .invoice-2 .invoice-id .info {
        margin: 0 auto 0 0;
        padding: 35px 0 0;
    }

    .invoice-2 .invoice-logo .logo {
        padding: 0;
        height: auto;
        margin-bottom: 15px;
        background: transparent;
    }

    .invoice-2 .invoice-headar{
        padding: 30px;
        background: #f3f3f3;
    }

    .invoice-2 .invoice-logo:before{
        display: none;
    }

    .invoice-2 .invoice-logo:after{
        display: none;
    }

    .invoice-2 .invoice-id .info {
        margin: 0 auto 0 0;
        padding: 0;
    }
}

@media (max-width: 580px){
    .invoice-2 .inv-header-1 {
        font-size: 22px;
    }

    .d-none-580{
        display: none!important;
    }
}
/** Invoice 2 end **/

/** Invoice 3 start **/
.invoice-3 {
    background: #fff6f6;
    padding: 30px 0;
}

.invoice-3 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #353535;
}

.invoice-3 .mb-30{
    margin-bottom: 30px;
}

.invoice-3 .invoice-info {
    background: #fff;
    position: relative;
    z-index: 0;
}

.invoice-3 .inv-header-1 {
    font-weight: 600;
    font-size: 20px;
    color: #262525;
}

.invoice-3 .inv-title-1{
    color: #262525;
}

.invoice-3 .order-summary h4 {
    font-size: 20px;
    margin: 0 0 20px;
    font-weight: 500;
    color: #262525;
}

.invoice-3 .order-summary .table-outer {
    overflow-y: hidden;
    overflow-x: auto;
}

.invoice-3 .order-summary .default-table thead th {
    position: relative;
    padding: 20px 30px;
    font-size: 15px;
    color: #353535;
    font-weight: 500;
    line-height: 30px;
    white-space: nowrap;
}

.invoice-3 .order-summary .default-table tr td {
    position: relative;
    padding: 21px 30px;
    font-size: 14px;
    color: #535353;
    font-weight: 400;
}

.invoice-3 .payment-info{
    max-width: 260px;
    margin-left: auto;
}

.invoice-3 .order-summary .default-table tr td strong{
    font-weight: 500;
}

.invoice-3 .order-summary .default-table {
    background: #fff;
    border: 0;
    width: 100%;
}

.invoice-3 .order-summary tbody, td, tfoot, th, thead, tr {
    border: solid 1px #f3f2f2;
}

.invoice-3 p{
    color: #535353;
}

.invoice-3 strong {
    text-transform: initial !important;
}

.invoice-3 .logo img {
    height: 25px;
}

.invoice-3 .invoice-name p {
    margin-bottom: 0;
}

.invoice-3 .invoice-center {
    padding: 50px;
    background: #f7f7f7;
}

.invoice-3 .invoice-headar{
    padding: 50px;
    border-bottom: solid 1px #d8d8d8;
}

.invoice-3 .invoice-bottom{
    padding: 50px 50px 20px;
}

.invoice-3 .invoice-top {
    padding: 50px 50px 20px;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-3 {
        padding: 30px 0;
    }
}

@media (max-width: 768px) {
    .invoice-3 .invoice-top{
        padding: 30px 30px 0;
    }

    .invoice-3 .invoice-center {
        padding: 30px;
    }

    .invoice-3 .invoice-name {
        text-align: left;
        float: left;
    }

    .invoice-3 .invoice-bottom {
        padding: 30px 30px 0;
    }

    .invoice-3 .invoice-headar {
        padding: 30px;
    }

    .invoice-3 .order-summary .default-table thead th {
        padding: 10px 12px;
    }

    .invoice-3 .order-summary .default-table tr td {
        padding: 10px 12px;
    }

    .invoice-3 {
        padding: 15px 0;
    }
}

@media (max-width: 580px){
    .invoice-3 .text-end {
        text-align: left!important;
    }

    .invoice-3 .payment-info{
        margin: 0 auto 30px 0;
        width: 100%;
    }

    .invoice-3 .logo img{
        margin-bottom: 10px;
    }
}
/** Invoice 3 end **/

/** Invoice 4 start **/
.invoice-4 {
    padding: 30px 0;
    background: #fff6f6;
}

.invoice-4 .mb-30{
    margin-bottom: 30px;
}

.invoice-4 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-4 .invoice-inner {
    background: #fff;
}

.invoice-4 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-4 .invoice-titel{
    padding: 20px 50px 15px;
    position: relative;
    z-index: 0;
}

.invoice-4 .invoice-titel:before {
    content: "";
    width: 350px;
    height: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 0 30px 30px 0;
    background: #e9e9e9;
}

.invoice-4 .invoice-titel:after {
    content: "";
    width: 350px;
    height: 100%;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -1;
    border-radius: 30px 0 0 30px;
    background: #e9e9e9;
}

.invoice-4 .bank-transfer-list-1 li strong{
    font-weight: 500;
}

.invoice-4 .fw-bold {
    font-weight: 500!important;
}

.invoice-4 .item-desc-1 small {
    font-size: 13px;
    color: #535353;
}

.invoice-4 .invoice-top .logo img {
    height: 25px;
}

.invoice-4 .invoice-top {
    padding: 50px 50px 40px;
}

.invoice-4 .invoice-top .invoice h1 {
    font-weight: 600;
    margin-bottom: 0;
    text-transform: uppercase;
    font-size: 28px;
    color: #262525;
}

.invoice-4 .inv-title-1{
    color: #262525;
}

.invoice-4 .invoice-info {
    padding: 50px 50px 20px;
}

.invoice-4 .invoice-info p {
    margin-bottom: 0;
}

.invoice-4 .invoice-titel h3 {
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 16px;
    color: #262525;
}

.invoice-4 .order-summary {
    padding: 0 50px 50px;
}

.invoice-4 .order-summary .table {
    margin-bottom: 0;
}

.invoice-4 .table td, .invoice-4 .table th {
    padding: 13px 20px;
    vertical-align: top;
    border-top: 1px solid #e9ecef;
    border-right: 1px solid #e9ecef;
    text-align: center;
}

.invoice-4 .table > :not(caption) > * > * {
    box-shadow: none;
}

.invoice-4 .table tr, .invoice-4 .table tr strong {
    font-size: 15px;
    text-transform: initial !important;
}

.invoice-4 .table>thead {
    vertical-align: bottom;
    font-weight: 500;
}

.invoice-4 .invoice-informeshon {
    padding: 0 50px 20px;
}

.invoice-4 .text-muted {
    color: #535353 !important;
}

.invoice-4 .invoice-informeshon p {
    font-size: 14px;
}

.invoice-4 .inv-title-1{
    margin-bottom: 7px;
}

.invoice-4 thead th {
    font-weight: 500;
}

.invoice-4 .invoice-contact {
    padding: 25px 50px;
    z-index: -1;
    background: #e9e9e9;
}

.invoice-4 .bank-transfer-list-1 {
    list-style: none;
    padding: 0;
    font-size: 14px !important;
}

.invoice-4 .invoice-contact a {
    margin-right: 20px;
    color: #535353;
    font-size: 14px;
}

.invoice-4 .mr-0{
    margin-right: 0;
}

@media (max-width: 992px) {
    .invoice-4 {
        padding: 30px 0;
    }
}

@media (max-width: 768px) {
    .invoice-4 .invoice-top {
        padding: 30px 30px 25px;
    }

    .invoice-4 .order-summary {
        padding: 0 30px 30px;
    }

    .invoice-4 .invoice-informeshon {
        padding: 0 30px;
    }

    .invoice-4 .invoice-contact {
        padding: 20px 30px;
    }

    .invoice-4 .invoice-top .logo img {
        height: 20px;
        margin-bottom: 5px;
    }

    .invoice-4 .invoice-top .invoice h1 {
        font-size: 24px;
    }

    .invoice-4 .invoice-titel {
        background: #e9e9e9;
        padding: 20px 30px 15px;
    }

    .invoice-4 .invoice-titel:before {
        display: none;
    }

    .invoice-4 .invoice-titel:after {
        display: none;
    }

    .invoice-4 .invoice-titel h3 {
        font-size: 16px;
    }

    .invoice-4 .invoice-info {
        padding: 30px 30px 0;
    }
}

@media (max-width: 580px) {
    .invoice-4 .invoice-top .invoice{
        float: left;
    }

    .invoice-4 .invoice-content .important-notes-list-1 {
        margin-bottom: 25px;
    }

    .invoice-4 .text-end {
        text-align: left !important;
    }

    .invoice-4 .invoice-name {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .invoice-4 .d-none-580{
        display: none!important;
    }
}
/** Invoice 4 end **/

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
    background: url(${img8}) top left repeat;
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
    background: url(${img9}) top left repeat;
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

/** Invoice 6 start **/
.invoice-6 {
    padding: 30px 0;
    background: #fff6f6;
}

.invoice-6 .mb-30{
    margin-bottom: 30px;
}

.invoice-6 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #262525;
}

.invoice-6 .invoice-info {
    background: #f3f4f7;
    position: relative;
    padding: 50px;
    z-index: 0;
}

.invoice-6 .invoice-info:before {
    content: "";
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: #d7e3ff;
}

.invoice-6 .invoice-contant{
    background: #fff;
}

.invoice-6 .invoice-contact-us{
    max-width: 230px;
    margin-left: auto;
}

.invoice-6 .invoice-contact-us ul{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.invoice-6 .logo img{
    height: 30px;
    margin-top: 42px;
}

.invoice-6 .invoice-headar{
    padding: 0 50px 40px;
}

.invoice-6 .invoice-contact-us h1{
    font-size: 20px;
    margin-bottom: 15px;
    color: #262525;
}

.invoice-6 .invoice-contact-us ul li{
    font-size: 14px;
    line-height: 25px;
    color: #535353;
}

.invoice-6 .invoice-contact-us ul li i{
    width: 20px;
    color: #535353;
}

.invoice-6 .invoice-contact-us ul li a{
    color: #535353;
}

.invoice-6 .inv-title-1 {
    color: #005ce7;
    margin-bottom: 5px;
}

.invoice-6 .name {
    font-size: 18px;
    margin-bottom: 5px;
    text-transform: uppercase;
    color: #262525;
    font-weight: 500;
}

.invoice-6 .name.mb-10{
    margin-bottom: 10px;
}

.invoice-6 .invoice-number-inner{
    max-width: 230px;
    margin-left: auto;
}

.invoice-6 .invoice-name{
    font-weight: 600;
    font-size: 30px;
}

.invoice-6 .table-outer {
    overflow-y: hidden;
    overflow-x: auto;
}

.invoice-6 .default-table thead th {
    position: relative;
    padding: 20px 30px;
    font-size: 15px;
    color: #005ce7;
    font-weight: 500;
    line-height: 30px;
    white-space: nowrap;
}

.invoice-6 .default-table tbody tr {
    position: relative;
    border-bottom: 1px solid #ECEDF2;
}

.invoice-6 .default-table tr td {
    position: relative;
    padding: 21px 30px;
    font-size: 14px;
    color: #535353;
    font-weight: 400;
}

.invoice-6 .default-table tr td strong{
    font-weight: 500;
}

.invoice-6 .default-table {
    position: relative;
    background: #ffffff;
    border: 0;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    min-width: 550px;
}

.invoice-6 .default-table thead {
    background: #F5F7FC;
    border-radius: 8px;
    color: #ffffff;
}

.invoice-6 .payment-method ul {
    list-style: none;
    padding: 0;
}

.invoice-6 .payment-method ul li strong {
    font-weight: 500;
}

.invoice-6 .invoice-top{
    padding: 50px 50px 20px;
}

.invoice-6 .order-summary{
    padding: 0 50px 50px;
}

.invoice-6 .invoice-bottom{
    padding: 0 50px 20px;
}

.invoice-6 .invoice-bottom .inv-title-1{
    margin-bottom: 7px;
}

.invoice-6 .payment-method{
    max-width: 230px;
    margin-left: auto;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-6 {
        padding: 30px 0;
    }

    .invoice-6 .order-summary .default-table thead th {
        padding: 12px 20px;
    }

    .invoice-6 .order-summary .default-table tr td {
        padding: 12px 20px;
    }
}

@media (max-width: 768px) {
    .invoice-6 .invoice-top {
        padding: 30px 30px 0;
    }

    .invoice-6 .order-summary {
        padding: 0 30px 30px;
    }

    .invoice-2 .invoice-id .info {
        margin: 0 auto 0 0;
        padding: 0;
    }

    .invoice-6 .invoice-bottom {
        padding: 0 30px 0;
    }

    .invoice-6 .invoice-headar {
        padding: 30px;
    }

    .invoice-6 .invoice-info {
        background: #f5f7fc;
        padding: 0;
    }


    .invoice-6 .default-table tr td {
        padding: 15px 20px;
    }

    .invoice-6 .default-table thead th {
        padding: 15px 20px;
    }

    .invoice-6 .order-summary .default-table thead th {
        padding: 10px 12px;
    }

    .invoice-6 .order-summary .default-table tr td {
        padding: 10px 12px;
    }
}

@media (max-width: 580px){
    .invoice-6 .invoice-contact-us {
        max-width: 100%;
        margin: 0;
    }

    .invoice-6 .invoice-number-inner {
        max-width: 100%;
        margin: 0;
    }

    .invoice-6 .payment-method {
        max-width: 100%;
        margin: 0 0 30px;
    }

    .invoice-6 .logo img {
        height: 25px;
        margin: 0 0 10px;
    }

    .invoice-6 .invoice-name {
        font-size: 24px;
    }
}
/** Invoice 6 end **/

/** Invoice 7 start **/
.invoice-7 {
    padding: 30px 0;
    background: #fff6f6;
}

.invoice-7 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #535353;
}

.invoice-7 .mb-30{
    margin-bottom: 30px;
}

.invoice-7 .invoice-inner {
    background: #fff;
    position: relative;
    z-index: 0;
}

.invoice-7 .invoice-inner:before {
    content: "";
    width: 25px;
    height: 50px;
    position: absolute;
    bottom: 50px;
    left: 0;
    z-index: 1;
    background: url(${img11}) top left repeat;
    background-size: cover;
}

.invoice-7 .invoice-inner:after {
    content: "";
    width: 25px;
    height: 50px;
    position: absolute;
    top: 50px;
    right: 0;
    z-index: 1;
    background: url(${img10}) top left repeat;
    background-size: cover;
}

.invoice-7 .item-desc-1 span {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
}

.invoice-7 .bank-transfer-list-1 li strong{
    font-weight: 500;
}

.invoice-7 .fw-bold {
    font-weight: 500!important;
}

.invoice-7 .item-desc-1 small {
    font-size: 13px;
    color: #535353;
}

.invoice-7 .invoice-top .logo img {
    height: 25px;
}

.invoice-7 .invoice-top {
    padding: 50px 100px;
}

.invoice-7 .invoice-top .invoice h1 {
    font-weight: 600;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-size: 28px;
    color: #336ff6;
}

.invoice-7 .invoice-info {
    padding: 50px 100px 20px;
    background: #f7f7f7;
}

.invoice-7 .invoice-info p {
    margin-bottom: 0;
}

.invoice-7 .order-summary {
    padding: 50px 100px;
}

.invoice-7 .order-summary .table {
    margin-bottom: 0;
}

.invoice-7 .table td, .invoice-7 .table th {
    padding: 10px 20px;
    vertical-align: top;
    border-top: 1px solid #e9ecef;
    border-right: 1px solid #e9ecef;
    text-align: center;
}

.invoice-7 .table > :not(caption) > * > * {
    box-shadow: none;
}

.invoice-7 .table tr, .invoice-7 .table tr strong {
    font-size: 14px;
}

.invoice-7 .bg-active {
    text-transform: uppercase;
    background: #f7f7f7;
    color: #535353!important;
}

.invoice-7 .table>thead {
    vertical-align: bottom;
    font-weight: 500;
}

.invoice-7 .invoice-informeshon {
    padding: 50px 100px 20px;
    background: #f7f7f7;
}

.invoice-7 .text-muted {
    color: #535353 !important;
}

.invoice-7 .invoice-informeshon p {
    font-size: 14px;
}

.invoice-7 .inv-title-1{
    margin-bottom: 7px;
    color: #336ff6;
    text-transform: uppercase;
}

.invoice-7 thead th {
    font-weight: 500;
}

.invoice-7 .invoice-contact {
    padding: 30px 100px;
    z-index: -1;
}

.invoice-7 .bank-transfer-list-1 {
    list-style: none;
    padding: 0;
    font-size: 14px !important;
}

.invoice-7 .invoice-contact a {
    margin-right: 20px;
    color: #535353;
    font-size: 14px;
}

.invoice-7 .invoice-contact a i{
    color: #336ff6;
}

.invoice-7 .mr-0{
    margin-right: 0;
}

@media (max-width: 992px) {
    .invoice-7 {
        padding: 30px 0;
    }

    .invoice-7 .invoice-top {
        padding: 50px;
    }

    .invoice-7 .invoice-info {
        padding: 50px 50px 20px;
    }

    .invoice-7 .order-summary {
        padding: 50px;
    }

    .invoice-7 .invoice-informeshon {
        padding: 50px 50px 20px;
    }

    .invoice-7 .invoice-inner:after {
        display: none;
    }

    .invoice-7 .invoice-inner:before {
        display: none;
    }

    .invoice-7 .invoice-contact {
        padding: 20px 50px;
    }

    .invoice-7 .d-none-992{
        display: none;
    }
}

@media (max-width: 768px) {
    .invoice-7 .invoice-top {
        padding: 30px 30px 25px;
    }

    .invoice-7 .order-summary {
        padding: 30px;
    }

    .invoice-7 .invoice-informeshon {
        padding: 30px 30px 0;
    }

    .invoice-7 .invoice-contact {
        padding: 20px 30px;
    }

    .invoice-7 .invoice-top .logo img {
        height: 20px;
        margin-bottom: 5px;
    }

    .invoice-7 .invoice-top .invoice h1 {
        font-size: 24px;
    }

    .invoice-7 .invoice-info {
        padding: 30px 30px 0;
    }
}

@media (max-width: 580px) {
    .invoice-7 .invoice-top .invoice{
        float: left;
    }

    .invoice-7 .invoice-content .important-notes-list-1 {
        margin-bottom: 25px;
    }

    .invoice-7 .text-end {
        text-align: left !important;
    }

    .invoice-7 .invoice-name {
        margin-top: 20px;
        margin-bottom: 30px;
    }

    .invoice-7 .d-none-580{
        display: none!important;
    }
}
/** Invoice 7 end **/

/** Invoice 8 start **/
.invoice-8 {
    padding: 30px 0;
    background: #fff;
}

.invoice-8 .invoice-info {
    position: relative;
    z-index: 0;
    padding: 70px;
    background: #c5f0ff;
    border-radius: 0px;
}

.invoice-8 .invoice-info:after {
    content: "";
    width: 388px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: url(${img12}) top left repeat;
    background-size: cover;
    z-index: -1;
    border-radius: 20px 0 0 20px;
}

.invoice-8 h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    color: #262525;
}

.invoice-8 .invoice-contact-us{
    max-width: 230px;
    margin-left: auto;
}

.invoice-8 .invoice-contact-us ul{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.invoice-8 .logo img{
    height: 30px;
    margin-top: 40px;
}

.invoice-8 .invoice-headar{
    padding: 40px;
    margin-bottom: 30px;
}

.invoice-8 .invoice-contact-us h1{
    font-size: 20px;
    margin-bottom: 10px;
}

.invoice-8 .invoice-contact-us ul li{
    font-size: 14px;
    line-height: 25px;
}

.invoice-8 .invoice-contact-us ul li i{
    width: 20px;
}

.invoice-8 .invoice-contact-us ul li a{
    color: #535353;
}

.invoice-8 .invoice-contact-us ul li i{
    color: #11bbb0;
}

.invoice-8 .inv-title-1 {
    color: #11bbb0;
    margin-bottom: 5px;
}

.invoice-8 .name {
    font-size: 18px;
    margin-bottom: 5px;
    color: #262525;
    font-weight: 500;
    text-transform: uppercase;
}

.invoice-8 .mb-30{
    margin-bottom: 30px;
}

.invoice-8 .mb-10{
    margin-bottom: 10px;
}

.invoice-8 .invoice-number-inner{
    max-width: 230px;
    margin-left: auto;
}

.invoice-8 .invoice-name{
    font-weight: 600;
    font-size: 30px;
}

.invoice-8 .table-outer {
    overflow-y: hidden;
    overflow-x: auto;
}

.invoice-8 .default-table thead th {
    position: relative;
    padding: 20px 30px;
    font-size: 15px;
    color: #11bbb0;
    font-weight: 500;
    line-height: 30px;
    white-space: nowrap;
}

.invoice-8 .default-table tbody tr {
    position: relative;
    border-bottom: 1px solid #ECEDF2;
}

.invoice-8 .default-table tr td {
    position: relative;
    padding: 21px 30px;
    font-size: 14px;
    color: #535353;
    font-weight: 400;
}

.invoice-8 .default-table tr td strong{
    font-weight: 500;
}

.invoice-8 .default-table {
    position: relative;
    background: transparent;
    border: 0;
    overflow: hidden;
    width: 100%;
    min-width: 550px;
    border-radius: 20px;
}

.invoice-8 .payment-method ul {
    list-style: none;
    padding: 0;
}

.invoice-8 .payment-method ul li strong {
    font-weight: 500;
}

.invoice-8 .invoice-top{
    padding: 40px 40px 10px;
    margin-bottom: 30px;
}

.invoice-8 .invoice-bottom{
    padding: 40px 40px 10px;
}

.invoice-8 .invoice-center{
    margin-bottom: 30px;
}

.invoice-8 .border-shadow-bg{
    background: #fff;
}

.invoice-8 .payment-method{
    max-width: 230px;
    margin-left: auto;
}

/** MEDIA **/
@media (max-width: 992px) {
    .invoice-8 {
        padding: 30px 0;
    }

    .invoice-8 .invoice-info {
        padding: 50px;
    }
}

@media (max-width: 768px) {
    .invoice-8 .invoice-top {
        padding: 30px 30px 0;
        margin-bottom: 0;
    }

    .invoice-8 .default-table {
        border-radius: 0;
    }

    .invoice-8 {
        background: #fff6f6;
    }

    .invoice-8 .invoice-info:after{
        display: none;
    }

    .invoice-8 .order-summary {
        padding: 30px;
        margin-bottom: 0;
    }

    .invoice-2 .invoice-id .info {
        margin: 0 auto 0 0;
        padding: 0;
    }

    .invoice-8 .invoice-bottom {
        padding: 30px 30px 0;
    }

    .invoice-8 .invoice-headar {
        padding: 30px;
        margin-bottom: 0;
    }

    .invoice-8 .invoice-info {
        padding: 0px;
    }

    .invoice-8 .default-table tr td {
        padding: 10px 12px;
    }

    .invoice-8 .default-table thead th {
        padding: 10px 12px;
    }

    .invoice-8 .border-shadow-bg {
        border-radius: 0;
        border-bottom: solid 1px #e5e5e5;
    }

    .invoice-8 .border-shadow-bg.bsb2{
        border-bottom: none;
    }

    .invoice-8 .invoice-center {
        margin-bottom: 0;
    }
}

@media (max-width: 580px){
    .invoice-8 .invoice-contact-us {
        max-width: 100%;
        margin: 0;
    }

    .invoice-8 .invoice-number-inner {
        max-width: 100%;
        margin: 0;
    }

    .invoice-8 .payment-method {
        max-width: 100%;
        margin: 0 0 30px;
    }

    .invoice-8 .logo img {
        height: 25px;
        margin: 0 0 10px;
    }
}
/** Invoice 8 end **/


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

    .text-end {
        text-align: right !important;
    }

    .invoice-1 {
        padding: 0;
        background: #fff;
    }

    .invoice-1 .invoice-inner {
        background: #f8f8f8;
    }

    .invoice-1 .container {
        padding: 0px;
    }

    .invoice-1 .invoice-info {
        box-shadow: none;
        margin: 0px;
    }

    .invoice-2 {
        padding: 0px;
        background: transparent;
    }

    .invoice-2 .container {
        padding: 0px;
    }

    .invoice-1 .invoice-headar {
        background: #f3f3f3;
    }

    .invoice-1 .inv-title-1 {
        color: #535353;
    }

    .invoice-content .color-white {
        color: #262525!important;
    }

    .invoice-1 .bg-active {
        background: #f3f3f3!important;
        color: #262525!important;
    }

    .invoice-1 .contact-info {
        background: #f3f3f3;
    }

    .invoice-1 .active-color {
        color: #262525!important;
    }

    .invoice-2 .invoice-contact {
        background: #f3f3f3;
    }

    .invoice-2 .contact-info a {
        color: #535353;
    }

    .invoice-2 .contact-info a i{
        color: #535353;
    }

    .invoice-2 p {
        color: #535353!important;
    }

    .invoice-2 .inv-header-1 {
        color: #262525;
    }

    .invoice-2 .invoice-headar{
        background: #f3f3f3;
    }

    .invoice-2 .inv-title-1 {
        color: #262525;
    }

    .invoice-2 .active-color {
        color: #535353!important;
    }

    .invoice-5 .invoice-info:before {
        display: none;
    }

    .invoice-5 .invoice-info:after {
        display: none;
    }

    .invoice-7 .inv-title-1 {
        color: #262525;
    }

    .invoice-7 .invoice-contact a i {
        color: #535353;
    }

    .invoice-7 .invoice-top .invoice h1 {
        color: #262525;
    }


    .invoice-7 .inv-title-1 {
        color: #535353;
    }

    .invoice-7 .default-table thead th {
        color: #262525;
    }

    .invoice-7 .invoice-inner:before {
        display: none;
    }

    .invoice-7 .invoice-inner:after {
        display: none;
    }

    .invoice-5 .inv-title-1 {
        color: #262525;
    }

    .invoice-6 .inv-title-1 {
        color: #535353;
    }

    .invoice-6 .default-table thead th {
        color: #262525;
    }

    .invoice-8 .invoice-info {
        background: #fff;
    }

    .invoice-8 .invoice-info:after {
        display: none;
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
                                      <div class="col-md-8 col-sm-6">
                                          <div class="invoice-logo">
                                              <!-- logo started -->
                                              <div class="logo">  
                                                <img
                                                src=${
                                                  Image.resolveAssetSource(logo)
                                                    .uri
                                                }
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
                                                    .reduce((partialSum, a) => partialSum + Number(a.TotalPrice), 0)}</strong></td>
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
            <td>${value.TotalPrice}</td>
        </tr>`;
};