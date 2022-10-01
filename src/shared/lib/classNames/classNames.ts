type Mods = Record<string, boolean | string | undefined>;

export const classNames = (
  mainClass: string,
  mods: Mods = {},
  additionalClasses: string[] = []
): string => {
  return [
    mainClass,
    ...additionalClasses.filter(Boolean),
    ...Object.entries(mods)
      .filter(([className, value]) => Boolean(value))
      .map(([className, value]) => className)
  ].join(' ');
};
