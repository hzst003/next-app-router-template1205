'use client';

import TableOne from "./TableOne";
import TableThreeA from "./TableThreeA";
import TableFour from "./TableFive";
import TableTwoA from "./TableTwoA";
import UploadTableThree from "./UpLoadtableThree";

export default function Page() {
  return (
    <>

      <div className="p-6 space-y-10">
        <UploadTableThree />
        <TableOne />
        <TableTwoA />
        <TableThreeA />
        <TableFour />
      </div>

      {/* 打印样式，仅对当前页面生效 */}
      <style jsx global>{`
        /* 定义 “横向页面” */
        @page landscapePage {
          size: A4 landscape;
          margin: 10mm;
        }

        /* 定义 “纵向页面” */
        @page portraitPage {
          size: A4 portrait;
          margin: 10mm;
        }

        @media print {
          /* 元素指定用哪个页面格式 */
          .landscape-page {
            page: landscapePage;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }

          .portrait-page {
            page: portraitPage;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }

          /* 强制每张表格独立成一页 */
          .break-before-page {
            page-break-before: always;
          }

          /* 避免表格被分页切开 */
          table, tr, td, th {
            page-break-inside: avoid !important;
          }
        }
      `}</style>
    </>
  );
}
