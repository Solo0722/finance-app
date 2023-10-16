import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "a1d8u8fu",
  dataset: "production",
  apiVersion: "2023-10-15",
  useCdn: true,
  token:
    "skxJ3kP7TeBnRQ6V6SOSTavP5dxWUVodXM1BMdBZPuxmTUdfrKn0I1RBrAUW4rzQRaQl5inXEWjUObB4JcGSDiB8I3PnXsfOTDAPmp7P3oWpH8fs8gQ5PyNRj8KG5kXuzMTzOe1e14Ue4NONMflA5bsOITMa6DRzhvSB6XCLcFBKvHDM10N1",
});
