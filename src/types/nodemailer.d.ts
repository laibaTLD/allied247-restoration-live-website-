declare module 'nodemailer' {
  interface Transporter {
    sendMail: (options: object) => Promise<object>;
  }
  interface Nodemailer {
    createTransport: (config: object) => Transporter;
  }
  const nodemailer: Nodemailer;
  export default nodemailer;
}
