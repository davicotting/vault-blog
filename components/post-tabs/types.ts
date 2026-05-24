export interface Topic {
  value: string;
  label: string;
}

export interface PostTabsProps {
  topics: Topic[];
  activeTab: string;
  onTabChange: (value: string) => void;
}
