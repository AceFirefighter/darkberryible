[general]
duration = 0		# 0 means forever
bufferSecs = 25		# default: 10
reconnect = yes		# reconnect to the server(s) if disconnected

[input]
device = plughw:1,0  	# system dependent
sampleRate =  22050	# sample rate in Hz. 22050 is the RR/Broadcastify Standard
bitsPerSample = 16	# 16 for mono feeds, 32 for stereo feeds
channel = 1		# 1 = mono, 2 = stereo

# this section describes a streaming connection to an IceCast server
# there may be up to 8 of these sections, named [icecast-0] ... [icecast-7]
# these can be mixed with [icecast2-x] and [shoutcast-x] sections
 
# If you want to send to your own icecast server, you basically copy
# this whole section and put in the values to point the feed to your own
# server instead of the RR information below

[icecast2-0]		# Use icecast2 format

bitrateMode = cbr	# RR/broadcastify default is cbr (vs vbr)
format = mp3  		# RR/broadcastify wants mp3
bitrate = 16
# The quality of encoding a value between 0.0 .. 1.0 with  1.0  being  the  highest quality
# .2 is good for scanner feed and takes less bandwidth than higher settings
quality = 0.2		# Scanner feed default: .2
channel = 1		# 1 = mono, 2 = stereo
# lowpass cuts off low freqs which is fine for scanner feeds and also lowers bandwidth
lowpass = 5000 
sampleRate = 22050
server = {{ server }}	# enter the server your feed is assigned 
port = {{ port }}		# default: 80
password = {{ password }}   	# enter your password 
mountPoint = {{ mountpoint }}  # enter your mountpoint
name = Anytown Fire Dept Dispatch 	 # enter name of your feed

#### 
# Added 1/8 by MattRock for radioplay archiving

[file-0] ### Archive File for radioplay ###
bitrateMode     = cbr	# average/constant bit rate
format          = mp3	# format of the stream: vorbis/mp3
bitrate         = 16	# bitrate of the stream sent to the server
quality         = 0.2	# Quaility. Default for scanner audio is .2		
fileName        = /tmp/radioplay_active.mp3	# active recording file

