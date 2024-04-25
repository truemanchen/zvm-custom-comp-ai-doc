export const aiPptDocSrc = `<html>
  <head>
    <script src="https://aippt-domestic.aippt.com/static/js/aippt-iframe-sdk.js?xxx=3bb"></script>

    <script>
      (async function xx() {
        try {
          await AipptIframe.show({
            appkey: '661c915b4b815', // 传进来
            channel: 'asoft', // 传进来
            code: '2a35bde6ec502c68814db7ed9abc24b5', // 传进来
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
