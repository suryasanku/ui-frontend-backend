package com.url.app.urllinkerspringreactjs.repository;

import com.url.app.urllinkerspringreactjs.model.Url;
import org.springframework.stereotype.Repository;

@Repository
public interface UrlMongoTemplateRepository {

    String findByShortUrl(String shortUrl);

    Url save(Url urlObject);
}
