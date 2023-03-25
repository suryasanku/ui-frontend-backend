package com.url.app.urllinkerspringreactjs.repository;

import com.url.app.urllinkerspringreactjs.model.Url;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

@Repository
public class UrlMongoTemplateRepositoryImpl implements UrlMongoTemplateRepository {

    private final MongoTemplate mongoTemplate;

    @Autowired
    public UrlMongoTemplateRepositoryImpl(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @Override
    public String findByShortUrl(String shortUrl) {
        Query query = new Query();
        query.addCriteria(Criteria.where("shorturl").is(shortUrl));
        Url url = mongoTemplate.findOne(query, Url.class);
        if(url != null) {
            System.out.println(url);
            return url.getOriginalUrl();
        }
        return null;
    }

    @Override
    public Url save(Url urlObject) {
        return mongoTemplate.insert(urlObject);
    }
}
