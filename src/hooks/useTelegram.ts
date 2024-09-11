declare global {
  interface Window {
    Telegram: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      WebApp: any;
    };
  }
}

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const onClose = () => {
    tg.close()
  }

  const onToggleButton = () => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }

  return {
    onClose,
    onToggleButton,
    tg,
    user: tg.initDataUnsafe?.user,
    queryId: tg.initDataUnsafe?.query_id,
  }
}