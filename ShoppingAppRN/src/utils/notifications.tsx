import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

export async function onDisplayNotification() {
  await notifee.requestPermission();

  //   const channelID = await notifee.createChannel({
  //     id: 'default',
  //     name: 'Default Channel',
  //   });

  await notifee.displayNotification({
    title: '<p style="color: #3389FF"><b>Order Placed!</b></p> 📦',
    body: '<p style="color: #8842DF">Your order for a Product has been placed</p>',
    android: {
      channelId: 'default',
      smallIcon: 'ic_launcher_round',
      pressAction: {
        id: 'default',
      },
    },
  });
}

export async function onCreateTriggerNotification(interval: number) {
  const date = new Date(Date.now());
  //   date.setMinutes(date.getMinutes() + 1);
  date.setSeconds(date.getSeconds() + interval);

  const trigger: TimestampTrigger = {
    type: TriggerType.TIMESTAMP,
    timestamp: date.getTime(),
  };

  await notifee.createTriggerNotification(
    {
      title: '<p style="color: #3389FF"><b>Out for Delivery!</b></p> 🚚',
      body: 'Your order for the product should be with you shortly!',
      android: {
        channelId: 'default',
      },
    },
    trigger,
  );
}
