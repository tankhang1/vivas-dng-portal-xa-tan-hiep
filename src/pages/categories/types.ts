import { FEEDBACK_ENABLED } from '@/shared/config/features';

export type CategoryType = 'feedback' | 'news';

export type CategoryRecord = {
  id: string;
  name: string;
  note: string;
  type: CategoryType;
};

export const categoryTypeOptions: { value: CategoryType; label: string }[] = [
  { value: 'feedback' as CategoryType, label: 'Phản ánh' },
  { value: 'news' as CategoryType, label: 'Tin tức' },
].filter((item) => FEEDBACK_ENABLED || item.value !== 'feedback');

export function categoryTypeLabel(type: CategoryType) {
  return categoryTypeOptions.find((item) => item.value === type)?.label ?? type;
}

export function defaultCategory(type: CategoryType = 'news'): CategoryRecord {
  return {
    id: '',
    name: '',
    note: '',
    type,
  };
}

export function normalizeCategory(category: Partial<CategoryRecord>): CategoryRecord {
  return {
    ...defaultCategory(),
    ...category,
    name: category.name ?? '',
    note: category.note ?? '',
    type: category.type ?? 'news',
  };
}
