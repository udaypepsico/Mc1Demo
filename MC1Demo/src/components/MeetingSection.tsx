import React, { useState } from 'react';
import { memo } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Linking } from 'react-native';
import { useTranslation } from 'react-i18next';

const MeetingSection = () => {
  const [meetingDate, setMeetingDate] = useState<Date>(new Date());
  const { t } = useTranslation();

  return (
    <View style={styles.meetingContainer}>
      <View style={styles.meetingInnerContainer}>
        <View style={styles.meetingTeamsContainer}>
          <IconButton
            icon="calendar"
            iconColor="white"
            style={styles.iconButton}
            size={30}
            mode="contained"
          ></IconButton>
          <View style={styles.meetingTimeContainer}>
            <Text style={styles.timeText}>
              9:00 AM - 9:30 AM |
              {meetingDate.toLocaleDateString('en-us', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </Text>
            <Text style={styles.teamMeetingText}>{t('Team Meeting')}</Text>
          </View>
        </View>
        <IconButton
          icon="video"
          size={30}
          onPress={() => {
            Linking.openURL(
              'https://teams.microsoft.com/l/meetup-join/19:meeting_NTg0NmQ3NTctZDVkZC00YzRhLThmNmEtOGQ3M2E0ODdmZDZk@thread.v2/0?context={"Tid":"72f988bf-86f1-41af-91ab-2d7cd011db47","Oid":"4b444206-207c-42f8-92a6-e332b41c88a2"}'
            );
          }}
        />
      </View>
      <View style={styles.locationDurationContainer}>
        <View style={styles.locationContainer}>
          <Ionicons name="location-sharp" size={20} color={'black'} />
          <Text ellipsizeMode="tail" style={styles.timeText}>
            Ocala Pepsi Location 123 Main St.City...
          </Text>
        </View>
        <View style={styles.durationContainer}>
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>30 min</Text>
          </View>
          <Text style={styles.timeText}>8</Text>
          <FontAwesome name="users" size={16} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  meetingContainer: {
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingLeft: 10,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  meetingInnerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  meetingTeamsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  meetingTimeContainer: {
    paddingTop: 10,
    paddingLeft: 10,
    alignItems: 'flex-start',
  },
  locationDurationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  iconButton: {
    borderRadius: 10,
    backgroundColor: '#FDC90A',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timeContainer: {
    borderRightColor: 'black',
    borderRightWidth: 1,
    paddingRight: 5,
    marginRight: 5,
  },
  timeText: {
    fontSize: 14,
  },
  teamMeetingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default memo(MeetingSection);
