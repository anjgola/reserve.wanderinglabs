class Facility::Rec1 < Facility
  def place_id; end

  def sub_name
    agency.name
  end

  def scraper_type
    :queue
  end

  def scraper_meta
    {
      key: 'ScraperRec1',
    }
  end

  def scraper_details
    {
      name: "#{id}:#{name[0..25]}",
      facilityId: id,
      siteIds: sites.map(&:ext_site_id),
      startDate: scrape_start.strftime('%m/%d/%Y'),
      endDate: scrape_end.strftime('%m/%d/%Y'),
      hash: last_import_hash,
    }
  end
end
