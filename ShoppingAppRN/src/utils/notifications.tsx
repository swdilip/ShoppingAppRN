import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

export async function onDisplayNotification() {
  await notifee.requestPermission();

  //   const channelID = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  await notifee.displayNotification({
    title: 'HELOOO WORLD',
    body: 'This notification seems to be working idk bruv',
    android: {
      channelId: 'default',
      smallIcon: 'ic_launcher_round',
      pressAction: {
        id: 'default',
      },
    },
  });
}

export async function onCreateTriggerNotification() {
  const date = new Date(Date.now());
  date.setMinutes(date.getMinutes() + 1);

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };

  await notifee.createTriggerNotification(
    {
      title: 'Your Order has been delivered!',
      body: 'Received by a very nice person',
      android: {
        channelId: 'default',
      },
    },
    trigger,
  );
}
