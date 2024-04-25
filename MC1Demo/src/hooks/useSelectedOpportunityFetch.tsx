import { Opportunity, OpportunityLineItem } from '../data/Record';

export const useSelectedOpportunityFetch =  (
  accountId: string,
  opportunityData: Opportunity[],
  opportunityLineItemData: OpportunityLineItem[]
): OpportunityLineItem[] => {
  const selectedOpportunity = opportunityData?.filter(
    (item) => item.AccountId == accountId
  );

  let filterredLineItems: OpportunityLineItem[] = [];
  selectedOpportunity?.map((item: any) => {
    opportunityLineItemData?.map((item2) => {
      if (item2.OpportunityId == item.Id) {
        filterredLineItems.push(item2);
      }
    });
  });
  return filterredLineItems;
};
