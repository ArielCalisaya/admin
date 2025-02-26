import axios from '../../axios';

class BreatheCodeClient {
  constructor() {
    this.host = `${process.env.REACT_APP_API_HOST}/v1`;
  }
  admissions() {
    return {
      updateCohortUserInfo: (cohort, user, payload) => {
        return axios._put(
          'Cohort',
          `${this.host}/admissions/cohort/${cohort}/user/${user}`,
          payload
        );
      },
      getAllUserCohorts: (query) => {
        const qs = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join('&');
        return axios._get(
          'Cohort',
          `${this.host}/admissions/academy/cohort/user?${qs}`
        );
      },
      addUserCohort: (cohort, payload) => {
        return axios._post(
          'Cohort',
          `${this.host}/admissions/cohort/${cohort}/user`,
          payload
        );
      },
      deleteUserCohort: (cohort, user) => {
        return axios._delete(
          'Cohort',
          `${this.host}/admissions/cohort/${cohort}/user/${user}`
        );
      },
      deleteStudentBulk: (query) => {
        console.log('query:', query);
        const qs = query.join(',');
        return axios._delete(
          'Cohort',
          `${this.host}/auth/academy/student?id=${qs}`
        );
      },
      deleteCohortsBulk: (query) => {
        const qs = query.join(',');
        return axios._delete(
          'Cohort',
          `${this.host}/admissions/academy/cohort?id=${qs}`
        );
      },
      deleteStaffBulk: (query) => {
        const qs = query.join(',');
        return axios._delete(
          'Cohort',
          `${this.host}/auth/academy/member?id=${qs}`
        );
      },
      deleteLeadsBulk: (query) => {
        const qs = query.join(',');
        return axios._delete(
          'Leads',
          `${this.host}/marketing/academy/lead?id=${qs}`
        );
      },
      deleteCertificatesBulk: (query) => {
        const qs = query.join(',');
        return axios._delete(
          'Certificates',
          `${this.host}/certificate/?id=${qs}`
        );
      },
      getCohort: (cohort) => {
        return axios._get(
          'Cohort',
          `${this.host}/admissions/academy/cohort/${cohort}`
        );
      },
      updateCohort: (cohort, payload) => {
        return axios._put(
          'Cohort',
          `${this.host}/admissions/academy/cohort/${cohort}`,
          payload
        );
      },
      addCohort: (payload) => {
        return axios._post(
          'Cohort',
          `${this.host}/admissions/academy/cohort`,
          payload
        );
      },
      getCertificates: () => {
        return axios._get(
          'Certificates',
          `${this.host}/admissions/certificate`
        );
      },
      getAllCohorts: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Cohorts',
          `${this.host}/admissions/academy/cohort${query ? '?' + qs : ''}`
        );
      },
      getReport: (query) => {
        return axios._get(
          "Report",
          `${this.host}/admissions/report`
        );
      },
      getAllCourseSyllabus: (query, academyID) => {
        return axios._get(
          'Syllabus',
          `${this.host}/admissions/certificate/${query}/academy/${academyID}/syllabus`
        );
      },
      getMyAcademy: () =>
        axios._get('My Academy', `${this.host}/admissions/academy/me`),
    };
  }
  auth() {
    return {
      addStudent: (payload) => {
        return axios._post(
          'Academy student',
          `${this.host}/auth/academy/student`,
          payload
        );
      },
      getUserByEmail: (email) => {
        return axios._get('User', `${this.host}/auth/user/${email}`);
      },
      getAllUsers: (query) => {
        return axios._get('Users', `${this.host}/auth/user?like=${query}`);
      },
      getAcademyMember: (user) => {
        return axios._get(
          'Academy member',
          `${this.host}/auth/academy/member/${user}`
        );
      },
      addAcademyMember: (payload) => {
        return axios._post(
          'Academy member',
          `${this.host}/auth/academy/member`,
          payload
        );
      },
      getRoles: () => {
        return axios._get('Role', `${this.host}/auth/role`);
      },
      updateAcademyStudent: (user, payload) => {
        return axios._put(
          'Academy student',
          `${this.host}/auth/academy/student/${user}`,
          payload
        );
      },
      updateAcademyMember: (user, payload) => {
        return axios._put(
          'Academy member',
          `${this.host}/auth/academy/member/${user}`,
          payload
        );
      },
      addAcademyStudent: (payload) => {
        return axios._post(
          'Academy student',
          `${this.host}/auth/academy/student`,
          payload
        );
      },
      getAcademyMembers: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Academy member',
          `${this.host}/auth/academy/member${query ? '?' + qs : ''}`
        );
      },
      getAcademyStudents: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Academy student',
          `${this.host}/auth/academy/student${query ? '?' + qs : ''}`
        );
      },
      resendInvite: (user) => {
        return axios._put(
          'Invite',
          `${this.host}/auth/member/invite/resend/${user}`
        );
      },
      getMemberInvite: (user) => {
        return axios._get(
          'Invite',
          `${this.host}/auth/academy/user/${user}/invite`
        );
      },
      passwordReset: (user_id, payload) => {
        return axios._post(
          'Password reset',
          `${this.host}/auth/member/${user_id}/password/reset`,
          payload
        );
      },
    };
  }
  marketing() {
    return {
      getLeads: (query) => {
        // start=${startDate.format('DD/MM/YYYY')}&academy=${academy}
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Lead report',
          `${this.host}/marketing/report/lead${query ? '?' + qs : ''}`
        );
      },
      getAcademyLeads: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Academy lead',
          `${this.host}/marketing/academy/lead${query ? '?' + qs : ''}`
        );
      },
      getAcademyTags: () =>
        axios._get('Academy tags', `${this.host}/marketing/academy/tag`),
      getAcademyAutomations: () =>
        axios._get(
          'Academy automations',
          `${this.host}/marketing/academy/automation`
        ),
      addNewLead: (newLead) =>
        axios._post('New lead', `${this.host}/marketing/lead`, newLead),
    };
  }

  feedback() {
    return {
      getSurveys: () => {
        return axios._get(
          'Academy Surveys',
          `${this.host}/feedback/academy/survey`
        );
      },
      getAnswers: (query) => {
        // start=${startDate.format('DD/MM/YYYY')}&astatus=ANSWERED
        const qs = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join('&');
        return axios._get(
          'Academy answers',
          `${this.host}/feedback/academy/answer?${qs}`
        );
      },
      addNewSurvey: (newSurvey) =>
        axios._post(
          'New Survey',
          `${this.host}/feedback/academy/survey`,
          newSurvey
        ),
      updateSurvey: (survey, id) =>
        axios._put(
          'Survey',
          `${this.host}/feedback/academy/survey/${id}`,
          survey
        ),
        getSurveys: (query) => {
      const qs =
        query !== undefined
          ? Object.keys(query)
              .map((key) => `${key}=${query[key]}`)
              .join('&')
          : '';
    return  axios._get('Academy survey',`${this.host}/feedback/academy/survey${query ? '?' + qs : ''}`)
    },
    getSurvey: (id) => {
      return  axios._get('Academy survey',`${this.host}/feedback/academy/survey/${id}`)
    }
    };
  }

  certificates() {
    return {
      getAllCertificates: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Certificates',
          `${this.host}/certificate${query ? '?' + qs : ''}`
        );
      },
      getCertificatesByCohort: (query) => {
        // start=${startDate.format('DD/MM/YYYY')}&astatus=ANSWERED
        const qs = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join('&');
        return axios.get(`${this.host}/certificate/cohort/?${qs}`);
      },
      addBulkCertificates: (payload) => {
        return axios._post(
          'Re-attemps certificates',
          `${this.host}/certificate/`,
          payload
        );
      },
      generateSingleStudentCertificate: (cohortID, userID, payload) => {
        return axios._post(
          'Student Certificate',
          `${this.host}/certificate/cohort/${cohortID}/student/${userID}`,
          payload
        );
      },
      generateAllCohortCertificates: (cohortID, payload) => {
        return axios._post(
          'All Cohort Certificates',
          `${this.host}/certificate/cohort/${cohortID}`,
          payload
        );
      },
      downloadCSV: (query) => {
        const qs = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join('&');
        return axios._get(
          'All Pages Table CSV',
          `${this.host}/certificate?${qs}`,
          {
            headers: { Accept: 'text/csv' },
            responseType: 'blob',
          }
        );
      },
    };
  }

  events() {
    return {
      getCheckins: (query) => {
        // start=${startDate.format('DD/MM/YYYY')}status=${status}&event=${event_id}
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Event',
          `${this.host}/events/academy/checkin${query ? '?' + qs : ''}`
        );
      },
      addAcademyEvent: (payload) => {
        return axios._post(
          'Academy event',
          `${this.host}/events/academy/event`,
          payload
        );
      },
      updateAcademyEvent: (event, payload) => {
        return axios._put(
          'Academy event',
          `${this.host}/events/academy/event/${event}`,
          payload
        );
      },
      getAcademyEvents: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Academy event',
          `${this.host}/events/academy/event${query ? '?' + qs : ''}`
        );
      },
      getAcademyEvent: (event) => {
        return axios._get(
          'Academy event',
          `${this.host}/events/academy/event/${event}`
        );
      },
      getAcademyVenues: () => {
        return axios._get('Venues', `${this.host}/events/academy/venues`);
      },
      getAcademyEventType: () => {
        return axios._get('Event Type', `${this.host}/events/academy/eventype`);
      },
      downloadCSV: (query) => {
        const qs = Object.keys(query)
          .map((key) => `${key}=${query[key]}`)
          .join('&');
        return axios._get(
          'Download CSV',
          `${this.host}/events/academy/checkin${query ? '?' + qs : ''}`,
          {
            headers: { Accept: 'text/csv' },
            responseType: 'blob',
          }
        );
      },
    };
  }
  layout() {
    return {
      getDefaultLayout: () => {
        return axios._get('Layout', `${this.host}/certificate/academy/layout`);
      }
    }
  }
  
  media() {
    return {
      upload: (payload) => {
        return axios._put('Media', `${this.host}/media/upload`, payload, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
      },
      getAllCategories: () => {
        return axios._get('Media', `${this.host}/media/category`);
      },
      getMedia: (query) => {
        const qs =
          query !== undefined
            ? Object.keys(query)
                .map((key) => `${key}=${query[key]}`)
                .join('&')
            : '';
        return axios._get(
          'Media',
          `${this.host}/media${query ? '?' + qs : ''}`
        );
      },
      updateMedia: (media, payload) => {
        return axios._put('Media', `${this.host}/media/info/${media}`, payload);
      },
      deleteMedia: (media) => {
        return axios._delete('Media', `${this.host}/media/info/${media}`);
      },
      createCategory: (payload) => {
        return axios._post('Category', `${this.host}/media/category`, payload);
      },
      updateMediaBulk: (payload) => {
        return axios._put('Media', `${this.host}/media/info`, payload);
      } 
    };
  }

  getItem(key) {
    let value = this.ls.getItem(key);
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }
}

export default new BreatheCodeClient();
