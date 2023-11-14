export const monitoringTabs = [
  { id: 0, title: "Pending" },
  { id: 1, title: "Completed" },
];

export const Pending = [
  {
    Header: "User",
    accessor: (row) => `${row.user} ${row.email}`,
  },
  {
    Header: "Risk level",
    accessor: "riskLevel",
  },
  {
    Header: "Trigger reason",
    accessor: "triggerReason",
  },
  {
    Header: "In queue for",
    accessor: "inQueueFor",
  },
  {
    Header: "Date added on.",
    accessor: "dateAddedOn",
  },
  {
    Header: "Previously reviewed",
    accessor: (row) =>
      row.previouslyReviewed === "Yes"
        ? `${row.previouslyReviewed} ${row.reviewedOn}`
        : `${row.previouslyReviewed}`,
  },
];

export const triggerPendingOptions = [
  { id: 0, title: "Hard flag" },
  { id: 1, title: "Temp flag" },
  { id: 2, title: "Restricted unflag" },
  { id: 3, title: "Un flag" },
  { id: 4, title: "Reviewed" },
];

export const riskPendingOptions = [
  { id: 0, title: "Hard flag" },
  { id: 1, title: "Temp flag" },
  { id: 2, title: "Restricted unflag" },
  { id: 3, title: "Un flag" },
  { id: 4, title: "Reviewed" },
];

export const Completed = [
  {
    Header: "User",
    accessor: (row) => `${row.user} ${row.email}`,
  },
  {
    Header: "Risk level",
    accessor: "riskLevel",
  },
  {
    Header: "Action reason",
    accessor: "actionReason",
  },
  {
    Header: "Time to close",
    accessor: "inQueueFor",
  },
  {
    Header: "Date added on.",
    accessor: "dateAddedOn",
  },
  {
    Header: "Action taken by",
    accessor: (row) => `${row.reviewer} ${row.reviewerEmail}`,
  },
];

export const triggerCompletedOptions = [
  { id: 0, title: "Hard flag" },
  { id: 1, title: "Temp flag" },
  { id: 2, title: "Restricted unflag" },
  { id: 3, title: "Un flag" },
  { id: 4, title: "Reviewed" },
];

export const riskCompletedOptions = [
  { id: 0, title: "Hard flag" },
  { id: 1, title: "Temp flag" },
  { id: 2, title: "Restricted unflag" },
  { id: 3, title: "Un flag" },
  { id: 4, title: "Reviewed" },
];
