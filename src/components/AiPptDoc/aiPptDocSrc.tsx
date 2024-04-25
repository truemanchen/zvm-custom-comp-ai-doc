export interface AiPptDocArgs {
  appkey: string;
  channel: string;
  code: string;
}

export const genAiPptDocSrc = ({
  appkey,
  channel,
  code,
}: AiPptDocArgs) => `<html>
  <head>
    <script src="https://aippt-domestic.aippt.com/static/js/aippt-iframe-sdk.js?xxx=3bb"></script>

    <script>
      (async function xx() {
        try {
          await AipptIframe.show({
            appkey: '${appkey}',
            channel: '${channel}',
            code: '${code}',
            editorModel: true,
            scene_auth: false,
            onMessage(eventType, data) {
              console.log(eventType, data);
            },
          });
        } catch (e) {
          console.log(e);
        }
        console.log(AipptIframe);
      })();
    </script>
  </head>

  <body></body>
</html>
`;
