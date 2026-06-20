// Classy Transformer Engine V2 — Template Loader
import type { TemplateDefinition, TemplateCategory } from '@/types'
import { allTemplates, templatesByCategory } from '@/data/templates'

export function getAllTemplates(): TemplateDefinition[] {
  return allTemplates
}

export function getTemplatesByCategory(
  category: TemplateCategory
): TemplateDefinition[] {
  return templatesByCategory[category] ?? []
}

export function getTemplateBySlug(
  slug: string
): TemplateDefinition | undefined {
  return allTemplates.find((t) => t.slug === slug)
}

export function getCategories(): TemplateCategory[] {
  return Object.keys(templatesByCategory) as TemplateCategory[]
}

export function getTemplateCount(): number {
  return allTemplates.length
}
