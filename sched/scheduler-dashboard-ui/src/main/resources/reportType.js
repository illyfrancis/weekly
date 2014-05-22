var dashboard = dashboard || {};
dashboard.reportTypes = [{
  "product": {
    "name": "Action Research",
    "layout": [{
      "code": "ACTN_RSCH_NEW",
      "name": "Action Research NEW"
    }, {
      "code": "AW_AR",
      "name": "Action Research Export"
    }]
  },
}, {
  "product": {
    "name": "Historical Balances",
    "layout": [{
      "code": "CS_EXPT_BLNC_TRAN",
      "name": "Cash Balance and Transaction Export"
    }, {
      "code": "CS_RPRT_BLNC",
      "name": "Cash Balance Report"
    }]
  },
}, {
  "product": {
    "name": "Historical Transactions",
    "layout": [{
      "code": "CS_RPRT_TRAN",
      "name": "Cash Transaction Report"
    }, {
      "code": "CS_RPRT_TRAN_SMRY",
      "name": "Cash Balance and Transaction Report"
    }]
  },
}, {
  "product": {
    "name": "ETF Reporting Profiles",
    "layout": [{
      "code": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-CUSTOM",
      "name": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-CUSTOM"
    }, {
      "code": "PLF_A-SUMMARY-CUSTOM",
      "name": "PLF_A-SUMMARY-CUSTOM"
    }, {
      "code": "PREDICTIONS_FILE_DETAIL-EQ",
      "name": "PREDICTIONS_FILE_DETAIL-EQ"
    }, {
      "code": "PREDICTIONS_FILE_DETAIL-FI",
      "name": "PREDICTIONS_FILE_DETAIL-FI"
    }, {
      "code": "PREDICTIONS_FILE_SUMMARY-FI",
      "name": "PREDICTIONS_FILE_SUMMARY-FI"
    }, {
      "code": "PREDICTIONS_FILE_SUMMARY-EQ",
      "name": "PREDICTIONS_FILE_SUMMARY-EQ"
    }, {
      "code": "PROSHARES_DAILY_FILES-ALL_NAV",
      "name": "PROSHARES_DAILY_FILES-ALL_NAV"
    }, {
      "code": "REPORT_DELIVERY",
      "name": "REPORT_DELIVERY"
    }, {
      "code": "RESIDUAL_CASH_DETAIL",
      "name": "RESIDUAL_CASH_DETAIL"
    }, {
      "code": "RESIDUAL_CASH_SECURITY_DETAIL",
      "name": "RESIDUAL_CASH_SECURITY_DETAIL"
    }, {
      "code": "RESTRICTED_SECURITIES(30_MINS)",
      "name": "RESTRICTED_SECURITIES(30_MINS)"
    }, {
      "code": "TRADE_BLOTTER-PRICED_BY_SPONSOR",
      "name": "TRADE_BLOTTER-PRICED_BY_SPONSOR"
    }, {
      "code": "TRADE_BLOTTER-SUMMARY",
      "name": "TRADE_BLOTTER-SUMMARY"
    }, {
      "code": "TRADE_BLOTTER-UNPRICED_BY_AP",
      "name": "TRADE_BLOTTER-UNPRICED_BY_AP"
    }, {
      "code": "TRADE_BLOTTER-UNPRICED_BY_SPONSOR",
      "name": "TRADE_BLOTTER-UNPRICED_BY_SPONSOR"
    }, {
      "code": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-STANDARD_PDF",
      "name": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-STANDARD_PDF"
    }, {
      "code": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-CUSTOM_PDF",
      "name": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-CUSTOM_PDF"
    }, {
      "code": "NSCC_PCF-DOMESTIC-STANDARD",
      "name": "NSCC_PCF-DOMESTIC-STANDARD"
    }, {
      "code": "PLF_A-SUMMARY-STANDARD-PDF",
      "name": "PLF_A-SUMMARY-STANDARD-PDF"
    }, {
      "code": "PLF_A-FIRST_TRUST-STANDARD",
      "name": "PLF_A-FIRST_TRUST-STANDARD"
    }, {
      "code": "PLF_A-SHOW_ALL_EXPORT-STANDARD",
      "name": "PLF_A-SHOW_ALL_EXPORT-STANDARD"
    }, {
      "code": "PLF_A-SUMMARY-STANDARD",
      "name": "PLF_A-SUMMARY-STANDARD"
    }, {
      "code": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-STANDARD",
      "name": "PLF_B-BASKET_COMPONENT_VALUATION_DATA-STANDARD"
    }, {
      "code": "PCF-FIRST_TRUST_CUSTOM",
      "name": "PCF-FIRST_TRUST_CUSTOM"
    }, {
      "code": "PCF_VGD(FI)-FINALIZED-STANDARD",
      "name": "PCF_VGD(FI)-FINALIZED-STANDARD"
    }, {
      "code": "PCF_VGD(FI)-FINALIZED-CUSTOM",
      "name": "PCF_VGD(FI)-FINALIZED-CUSTOM"
    }, {
      "code": "AP_SERVICES_DC_PVAL",
      "name": "AP_SERVICES_DC_PVAL"
    }, {
      "code": "AP_SERVICES_CC_PVAL",
      "name": "AP_SERVICES_CC_PVAL"
    }, {
      "code": "BSF_STANDARD_SUPPLEMENTAL",
      "name": "BSF_STANDARD_SUPPLEMENTAL"
    }, {
      "code": "NSCC_PCF_SUPPLEMENTAL",
      "name": "NSCC_PCF_SUPPLEMENTAL"
    }, {
      "code": "NSCC_PCF_ENHANCED",
      "name": "NSCC_PCF_ENHANCED"
    }, {
      "code": "TRADE_BLOTTER-PRICED_BY_AP",
      "name": "TRADE_BLOTTER-PRICED_BY_AP"
    }, {
      "code": "1FO-PRICE_FILE(FI)",
      "name": "1FO-PRICE_FILE(FI)"
    }, {
      "code": "2FO-PRICE_FILE(EQ)",
      "name": "2FO-PRICE_FILE(EQ)"
    }, {
      "code": "ACTUAL_CASH_FILE(FI)-7FO",
      "name": "ACTUAL_CASH_FILE(FI)-7FO"
    }, {
      "code": "ACTUAL_CASH_SECURITY_DETAIL",
      "name": "ACTUAL_CASH_SECURITY_DETAIL"
    }, {
      "code": "BSF-CUSTOM",
      "name": "BSF-CUSTOM"
    }, {
      "code": "BSF-STANDARD",
      "name": "BSF-STANDARD"
    }, {
      "code": "BURSTED_IN_KIND_TRADE",
      "name": "BURSTED_IN_KIND_TRADE"
    }, {
      "code": "BURSTING_REPORTING_(FI)-6FO",
      "name": "BURSTING_REPORTING_(FI)-6FO"
    }, {
      "code": "CASH_COUNTRY(30_MINUTES)",
      "name": "CASH_COUNTRY(30_MINUTES)"
    }, {
      "code": "DIRECTED_CASH_ORDER_ACTIVITY_FILE(30_MINS)",
      "name": "DIRECTED_CASH_ORDER_ACTIVITY_FILE(30_MINS)"
    }, {
      "code": "ESTIMATED_CASH_BACK-UP",
      "name": "ESTIMATED_CASH_BACK-UP"
    }, {
      "code": "ESTIMATED_CASH_CONTROL_REPORT-SUMMARY",
      "name": "ESTIMATED_CASH_CONTROL_REPORT-SUMMARY"
    }, {
      "code": "ESTIMATED_CASH_SECURITY_DETAIL",
      "name": "ESTIMATED_CASH_SECURITY_DETAIL"
    }, {
      "code": "IDC_INAV_FILES_ETF_BASKET_COMPONENTS",
      "name": "IDC_INAV_FILES_ETF_BASKET_COMPONENTS"
    }, {
      "code": "INAV_CASH_SECURITY_DETAIL",
      "name": "INAV_CASH_SECURITY_DETAIL"
    }, {
      "code": "IRISH_STOCK_EXCHANGE(ISE)INAV_REPORTING",
      "name": "IRISH_STOCK_EXCHANGE(ISE)INAV_REPORTING"
    }, {
      "code": "LONG_TERM_CASH(WITH_BURST)-9FO",
      "name": "LONG_TERM_CASH(WITH_BURST)-9FO"
    }, {
      "code": "N11-PVAL_TO_OFFSHORE",
      "name": "N11-PVAL_TO_OFFSHORE"
    }, {
      "code": "NEW_CASH_FILE(FI)-23FO",
      "name": "NEW_CASH_FILE(FI)-23FO"
    }, {
      "code": "NSCC_PCF(RETURNED)-FOREIGN",
      "name": "NSCC_PCF(RETURNED)-FOREIGN"
    }, {
      "code": "NSCC_PCF-DOMESTIC-CUSTOM",
      "name": "NSCC_PCF-DOMESTIC-CUSTOM"
    }, {
      "code": "NSCC_PCF-FOREIGN",
      "name": "NSCC_PCF-FOREIGN"
    }, {
      "code": "PCF_VGD(EQ)-FINALIZED-STANDARD",
      "name": "PCF_VGD(EQ)-FINALIZED-STANDARD"
    }, {
      "code": "PCF-FIRST_TRUST_STANDARD",
      "name": "PCF-FIRST_TRUST_STANDARD"
    }, {
      "code": "PCF-PIMCO-C/R",
      "name": "PCF-PIMCO-C/R"
    }, {
      "code": "PCF-PIMCO-CALCULATION-FWD",
      "name": "PCF-PIMCO-CALCULATION-FWD"
    }, {
      "code": "PLF_A-SUMMARY-CUSTOM-PDF",
      "name": "PLF_A-SUMMARY-CUSTOM-PDF"
    }, {
      "code": "PLF_A-FIRST_TRUST-CUSTOM",
      "name": "PLF_A-FIRST_TRUST-CUSTOM"
    }, {
      "code": "PLF_A-SHOW_ALL_EXPORT-CUSTOM",
      "name": "PLF_A-SHOW_ALL_EXPORT-CUSTOM"
    }, {
      "code": "PLF_B-POWERSHARES_VERSION",
      "name": "PLF_B-POWERSHARES_VERSION"
    }]
  },
}, {
  "product": {
    "name": "Factor Research",
    "layout": [{
      "code": "AW_FCT",
      "name": "Factor Research Export"
    }]
  },
}, {
  "product": {
    "name": "Fund Admin TER Reports",
    "layout": [{
      "code": "DETAIL_CSV",
      "name": "FA - Detail CSV report"
    }, {
      "code": "B_REPORT",
      "name": "FA - B report"
    }, {
      "code": "INDIVIDUAL_REPORT",
      "name": "FA - Individual report"
    }, {
      "code": "COMPOSITE_REPORT",
      "name": "FA - Composite report"
    }, {
      "code": "DETAIL_EXCEL",
      "name": "FA - Detail Excel report"
    }, {
      "code": "C_REPORT",
      "name": "FA - C report"
    }]
  },
}, {
  "product": {
    "name": "Broker Reports",
    "layout": [{
      "code": "BRKR_ALOC",
      "name": "Broker Allocation"
    }, {
      "code": "BRKR_NON_CMSN",
      "name": "Top Non Commission Brokers"
    }, {
      "code": "BRKR_CMSN",
      "name": "Top Broker by Commission"
    }, {
      "code": "BRKR_RECAP",
      "name": "Broker Recap Detail"
    }, {
      "code": "BRKR_EXC",
      "name": "Broker Exception"
    }]
  },
}, {
  "product": {
    "name": "Fund Administration",
    "layout": [{
      "code": "AVG_NET_ASET",
      "name": "Average Net Assets & Average Shares"
    }]
  },
}, {
  "product": {
    "name": "Holdings and Valuation",
    "layout": [{
      "code": "CHNG_AST",
      "name": "Change in Assets"
    }, {
      "code": "GAAP",
      "name": "GAAP Holdings"
    }, {
      "code": "HLDG",
      "name": "Holdings"
    }, {
      "code": "QOT_SHET_MIA",
      "name": "Market Impact Analysis"
    }, {
      "code": "OPN_FCC",
      "name": "Open Forward Currency Contracts"
    }, {
      "code": "OPN_TRD",
      "name": "Open Trades"
    }, {
      "code": "PORT_INVS",
      "name": "Portfolio Investments"
    }, {
      "code": "PORT_VAL",
      "name": "Portfolio Valuation"
    }, {
      "code": "PRCG_RPT",
      "name": "Pricing Report"
    }, {
      "code": "QOT_SHET",
      "name": "Quote Sheet"
    }, {
      "code": "UNCHNG_PRC",
      "name": "Unchanged Prices"
    }]
  },
}, {
  "product": {
    "name": "Income and Receivables",
    "layout": [{
      "code": "OPN_INT_RCV",
      "name": "Open Interest and Reclaim Receivables"
    }, {
      "code": "DLY_INC_ACRL",
      "name": "Daily Income Accruals - Historical"
    }, {
      "code": "DIVD_INC_ERN",
      "name": "Dividend Income Earned"
    }, {
      "code": "INTACRL_POSN",
      "name": "Interest Income Accruals"
    }, {
      "code": "INT_INC_ERN",
      "name": "Interest Income Earned - Historical"
    }, {
      "code": "INTINCM_POSN",
      "name": "Interest Income Earned YTD"
    }, {
      "code": "OPN_DIVD_RCV",
      "name": "Open Dividend and Reclaim Receivables"
    }]
  },
}, {
  "product": {
    "name": "NAV and Trial Balances",
    "layout": [{
      "code": "NAV_SMRY",
      "name": "NAV Summary"
    }, {
      "code": "JRNL_PSTG",
      "name": "Journal Postings"
    }, {
      "code": "WRKG_TRLBAL",
      "name": "Working Trial Balance"
    }, {
      "code": "NAV_TRIALBAL",
      "name": "NAV Trial Balance"
    }, {
      "code": "NAV_RECON",
      "name": "NAV Reconciliation"
    }, {
      "code": "MVAL_TRLBAL",
      "name": "Market Value NAV Trial Balance"
    }]
  },
}, {
  "product": {
    "name": "Pooling Reports",
    "layout": [{
      "code": "SF_OPN_FCC",
      "name": "Subfund Open Forward Currency Contracts"
    }, {
      "code": "SF_OPN_TRD",
      "name": "Subfund Open Trades"
    }, {
      "code": "SF_PORT_VAL",
      "name": "Subfund Portfolio Valuation"
    }, {
      "code": "POOL_OWNSHP",
      "name": "Pool Ownership"
    }, {
      "code": "SF_NAV_TRLBAL",
      "name": "Subfund NAV Trial Balance"
    }]
  },
}, {
  "product": {
    "name": "Transactions and Gain/Loss",
    "layout": [{
      "code": "CSH_JRNL_LCL_NEW",
      "name": "Cash Journal - Local "
    }, {
      "code": "CRNCY_RLZD_GL",
      "name": "Currency Settlement Gain/Loss"
    }, {
      "code": "RLZD_GL",
      "name": "Realized Gain/Loss"
    }, {
      "code": "CSH_JRNL_BSE_NEW",
      "name": "Cash Journal - Base Equivalent "
    }, {
      "code": "CAPSTK_ROLFWD",
      "name": "Capstock Rollforward"
    }, {
      "code": "TRN_JRNL",
      "name": "Transaction Journal"
    }, {
      "code": "TRN_IMPCT",
      "name": "Transaction Impact Analysis"
    }, {
      "code": "TRD_JRNL_SMRY",
      "name": "Trade Journal Summary"
    }, {
      "code": "TRD_JRNL_DTL",
      "name": "Trade Journal Detail"
    }]
  },
}, {
  "product": {
    "name": "FX Standing Instructions",
    "layout": [{
      "code": "AW_FXI",
      "name": "AW FX Standing Instructions Export"
    }]
  },
}, {
  "product": {
    "name": "GS Portfolio Valuation-OFI&BBH Only",
    "layout": [{
      "code": "OFI_PORT_VAL_GS",
      "name": "Golden Source Pval"
    }]
  },
}, {
  "product": {
    "name": "GS Trade Date Position",
    "layout": [{
      "code": "OFI_TD_PVAL_GS",
      "name": "GS Trade Date Position"
    }]
  },
}, {
  "product": {
    "name": "GS Transactions-OFI&BBH Only",
    "layout": [{
      "code": "OFI_TRN_JRNL_GS",
      "name": "Goldensource Transaction Journal"
    }]
  },
}, {
  "product": {
    "name": "Trade Date Reporting",
    "layout": [{
      "code": "TD_OPN_TRD",
      "name": "Trade Date Open Trades"
    }, {
      "code": "TD_PVAL",
      "name": "Start of Day Positions"
    }]
  },
}, {
  "product": {
    "name": "Internal Response Reconciliation",
    "layout": [{
      "code": "AW_RCG",
      "name": "Internal Response Reconciliation Export"
    }]
  },
}, {
  "product": {
    "name": "Past Due Receivable/Payable",
    "layout": [{
      "code": "AW_PD",
      "name": "Receivable/Payable Past Due Export"
    }]
  },
}, {
  "product": {
    "name": "Positions Reporting - Positions",
    "layout": [{
      "code": "POSITIONS_SUMMARY_CAT",
      "name": "Summary report grouped by Category"
    }, {
      "code": "POSITIONS_SUMMARY_LOC",
      "name": "Summary report grouped by Location"
    }, {
      "code": "POSITIONS_SUMMARY_SEC",
      "name": "Summary report grouped by Security"
    }, {
      "code": "POSITIONS_GRID",
      "name": "The tabular report similar to PR grid"
    }, {
      "code": "POSITIONS_GRID_CD",
      "name": "The grid report with custom delimiter"
    }]
  },
}, {
  "product": {
    "name": "Receivable/Payable",
    "layout": [{
      "code": "AW_RP",
      "name": "Receivable/Payable Export"
    }]
  },
}, {
  "product": {
    "name": "Response Reconciliation",
    "layout": [{
      "code": "AW_RC",
      "name": "Response Reconciliation Export"
    }]
  },
}, {
  "product": {
    "name": "Response Research",
    "layout": [{
      "code": "AW_RR",
      "name": "Response History Export"
    }]
  },
}, {
  "product": {
    "name": "Response Status",
    "layout": [{
      "code": "AW_RS",
      "name": "Response Status Export"
    }]
  },
}, {
  "product": {
    "name": "Response Standing Instructions",
    "layout": [{
      "code": "AW_RSI",
      "name": "AW Resp Standing Instruct Export"
    }]
  },
}, {
  "product": {
    "name": "Real Time Balances",
    "layout": [{
      "code": "CSRT_BALS",
      "name": "CashRT Balance Report"
    }]
  },
}, {
  "product": {
    "name": "Real Time Transactions",
    "layout": [{
      "code": "CSRT_TRNS",
      "name": "CashRT Transaction Report"
    }]
  },
}, {
  "product": {
    "name": "Activity",
    "layout": [{
      "code": "CLOSED_LN",
      "name": "Closed Loans"
    }, {
      "code": "NEW_LN",
      "name": "New Loans"
    }, {
      "code": "PNDG_LN",
      "name": "Pending Loans"
    }, {
      "code": "PNDG_RTRN",
      "name": "Pending Returns"
    }]
  },
}, {
  "product": {
    "name": "Balances",
    "layout": [{
      "code": "HIST_BAL",
      "name": "Historical Balance"
    }, {
      "code": "PCTHLDGS_ON_LN",
      "name": "Percentage Holdings On Loan"
    }, {
      "code": "OUTSTDGLN_BAL",
      "name": "Outstanding Loan Bal"
    }]
  },
}, {
  "product": {
    "name": "Collateral",
    "layout": [{
      "code": "NONCSH_COL",
      "name": "Non-Cash Collateral Margin"
    }, {
      "code": "CSH_COL",
      "name": "Cash Collateral Margin"
    }, {
      "code": "NONCSH_MRGN_SMRY",
      "name": "Non-Cash Margin Summary"
    }]
  },
}, {
  "product": {
    "name": "Compliance",
    "layout": [{
      "code": "AMT_OUTSTDG",
      "name": "Amount Outstanding Compliance"
    }, {
      "code": "CRLMT_CMPLC",
      "name": "Daily Credit Limit"
    }, {
      "code": "DLYPRCG_AT_LNLVL",
      "name": "Same Day Pricing at Loan Level"
    }, {
      "code": "DLYPRCG_CMPLC",
      "name": "Same Day Pricing"
    }, {
      "code": "ASETLN_CMPLC",
      "name": "Percent Asset on Loan"
    }]
  },
}, {
  "product": {
    "name": "Earnings",
    "layout": [{
      "code": "ACTL_MTHLY_ERNGS",
      "name": "Actual Monthly Earnings"
    }, {
      "code": "DLYESTMD_ERNGS",
      "name": "Daily Estimated Earnings"
    }, {
      "code": "MTD_ERNGS",
      "name": "Estimated MTD Earnings"
    }, {
      "code": "HIST_ERNGS",
      "name": "Historical Client Earnings"
    }, {
      "code": "TOPERNGS_SECR",
      "name": "Top Earnings Security"
    }]
  },
}, {
  "product": {
    "name": "Performance",
    "layout": [{
      "code": "ROTA_PRFRMNC",
      "name": "Return on Total Assets Performance"
    }, {
      "code": "PRFRMNC_SUM",
      "name": "Performance Summary"
    }]
  },
}, {
  "product": {
    "name": "Shares Receivable/Payable",
    "layout": [{
      "code": "AW_PR",
      "name": "Payable/ Receivable Export"
    }]
  },
}, {
  "product": {
    "name": "Sub Group Response Reconciliation",
    "layout": [{
      "code": "AW_RCS",
      "name": "Subgroup Response Reconciliation Export"
    }]
  },
}, {
  "product": {
    "name": "Tax Withholding Elections",
    "layout": [{
      "code": "AW_TE",
      "name": "Tax Withholding Election"
    }]
  },
}, {
  "product": {
    "name": "Transaction Reporting",
    "layout": [{
      "code": "TRADES_GRID_CD",
      "name": "The grid report with custom delimiter"
    }, {
      "code": "TRADES_SUMMARY_TS",
      "name": "Summary report grouped by Trade Status"
    }, {
      "code": "TRADES_GRID",
      "name": "The tabular report similar to TR grid"
    }, {
      "code": "TRADES_SUMMARY_SL",
      "name": "Summary report grouped by Settlement Location"
    }, {
      "code": "TRADES_SUMMARY_C",
      "name": "Summary report grouped by Currency"
    }]
  },
}, {
  "product": {
    "name": "Tax Reclaim",
    "layout": [{
      "code": "AW_TR",
      "name": "Tax Reclaim Export"
    }]
  },
}, {
  "product": {
    "name": "WM Real Time Balances",
    "layout": [{
      "code": "CSRT_BALS_WM",
      "name": "WM CashRT Balance Report"
    }]
  },
}, {
  "product": {
    "name": "WM Real Time Transactions",
    "layout": [{
      "code": "CSRT_TRNS_WM",
      "name": "WM CashRT Transaction Report"
    }]
  }
}];

