
export function castRestParameter(locator: string, ...values: string[]): string {
  let i = 0;
  return locator.replace(/%s/g, () => values[i++] ?? '');
}

export function castNamedParameter(locator: string, values: Record<string, string>): string {
  return locator.replace(/{(\w+)}/g, (_, key) => {
    return key in values ? values[key] : `{${key}}`;
  });
}