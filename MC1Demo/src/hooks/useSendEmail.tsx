import RNMail from 'react-native-mail';

export function useSendEmail(emailId: string, invoiceFilePath: string) {
  try {
    RNMail.mail(
      {
        subject: `Invoice`,
        recipients: [emailId],
        body: `<b>Invoice Sent</b>`,
        isHTML: true,
        attachments: [
          {
            path: invoiceFilePath,
            uri: invoiceFilePath,
            type: 'pdf', // Mime Type: jpg, png, doc, ppt, html, pdf, csv
          },
        ],
      },
      (error, event) => {
        if (error != undefined) {
          console.log(error);
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
}
