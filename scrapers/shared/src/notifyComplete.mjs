import rp from 'request-promise';

export default class NotifyComplete {
  constructor(facilityId) {
    this.facilityId = facilityId;
    this.rp = rp.defaults({ followRedirect: false });
    this.base = process.env.RESERVE_API_URL;
  }

  post(runId, hash) {
    // console.log('posting to', this.base)
    const options = {
      url: `${this.base}/facilities/${this.facilityId}/availabilities/import`,
      method: 'POST',
      form: {
        import: runId,
        hash,
      },
    };
    return this.rp(options);
  }
}
