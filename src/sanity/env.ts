export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-02-19";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

export const token = assertValue(
  "sk4abFZEDWXXBZGJV39ZBKIOdeZwjxRLTD0hb9iXDekDhBbU4WOOqyW79yU2JP2Y9un4YQr2ASfMlrJvbNQhypNJPbw3BQUKdmRrPPXpnem2gZBiucLgh5XI0EYsfMWALlAAmBBTMPeCGRhQuO87oMm1srFG7ANI33UDxGMKbFivhraeO0qU",
  "Missing eviroment variable: SANITY_API_TOKEN"
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
