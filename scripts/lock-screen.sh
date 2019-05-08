# lock on KDE
loginctl lock-session
# lock on GNOME  
gnome-screensaver-command --lock
dbus-send --type=method_call --dest=org.gnome.ScreenSaver \
    /org/gnome/ScreenSaver org.gnome.ScreenSaver.Lock
# lock on CINNAMON
cinnamon-screensaver-command --lock
# lock on XFCE
xflock4
