import { parseISO, format } from "date-fns";

export function getDate(dateString: string) {
  let date = parseISO(dateString);

  return format(date, "LLL d, yyy");
}
